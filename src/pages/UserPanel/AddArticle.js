import { useState, useContext, useEffect, useReducer } from "react"
import { useNavigate } from "react-router-dom"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { initialState, reducer } from "../../reducer/reducerArticle"
import { storage, firebaseConfig } from "../../firebase"
import LoginContext from "../../context/loginContext"
import Preloader from "../../UI/Preloader"
import axios from "axios"
import { v4 } from "uuid"

const HTTPS_URL = `${firebaseConfig.databaseURL}/articles.json`

function AddArticle() {
	const [state, dispatch] = useReducer(reducer, initialState)
	const {
		dataAddArticle,
		errorTitle,
		errorImage,
		errorDescription,
		toggleTitle,
		toggleImage,
		toggleDescription,
		toggleCheckbox,
	} = state

	const loginContext = useContext(LoginContext)
	const navigate = useNavigate()

	const handleAddArticle = async e => {
		e.preventDefault()
		dispatch({ type: "errorTitle", errorTitle: "" })
		dispatch({ type: "errorImage", errorImage: "" })
		dispatch({ type: "errorDescription", errorDescription: "" })
		dispatch({ type: "toggleTitle", toggleTitle: false })
		dispatch({ type: "toggleImage", toggleImage: false })
		dispatch({ type: "toggleDescription", toggleDescription: false })

		if (!dataAddArticle.title) {
			dispatch({ type: "errorTitle", errorTitle: "Musisz podać tytuł!" })
		} else {
			dispatch({ type: "errorTitle", errorTitle: "" })
			dispatch({ type: "toggleTitle", toggleTitle: true })
		}

		if (!toggleCheckbox) {
			if (!dataAddArticle.image) {
				dispatch({ type: "errorImage", errorImage: "Dodaj zdjęcie artykułu!" })
			} else {
				dispatch({ type: "errorImage", errorImage: "" })
				dispatch({ type: "toggleImage", toggleImage: true })
			}
		} else {
			dispatch({ type: "errorImage", errorImage: "" })
			dispatch({ type: "toggleImage", toggleImage: true })
		}

		if (!dataAddArticle.description) {
			dispatch({
				type: "errorDescription",
				errorDescription: "Dodaj Treść artykułu!",
			})
		} else if (loginContext.dataUser.localId !== "gc0RCgDg1LXZopMxvRw0x1RV8Gg2") {
			dispatch({
				type: "errorDescription",
				errorDescription: "TO KONTO NIE MA MOŻLIWOŚCI DODAWANIA TREŚCI!",
			})
		} else {
			dispatch({ type: "errorDescription", errorDescription: "" })
			dispatch({ type: "toggleDescription", toggleDescription: true })
		}
	}

	useEffect(() => {
		if (toggleImage && toggleTitle && toggleDescription) {
			addArticle()
		}
	}, [toggleImage, toggleTitle, toggleDescription])

	const addArticle = async () => {
		try {
			let imageUrl = null
			if (!toggleCheckbox) {
				const imageRef = ref(storage, `images/${dataAddArticle.image.name + v4()}`)
				await uploadBytes(imageRef, dataAddArticle.image)
				imageUrl = await getDownloadURL(imageRef)
			}
			const articleData = {
				author: loginContext.dataUser.email || "Anonimowy",
				photoUserUrl: loginContext.dataUser.photoUserUrl,
				datePublication: dataAddArticle.datePublication,
				description: dataAddArticle.description,
				image: imageUrl,
				title: dataAddArticle.title,
			}
			await axios.post(HTTPS_URL, articleData)
			navigate("/panel-uzytkownika/wszystkie-artykuły")
		} catch (ex) {
			console.error(ex)
		}
	}

	if (!loginContext.dataUser) {
		return <Preloader />
	} else {
		return (
			<>
				{toggleImage && toggleTitle && toggleDescription ? (
					<Preloader />
				) : (
					<div>
						<form className='box-form-add-article' onSubmit={handleAddArticle}>
							<label htmlFor='title'>Tytuł</label>
							<input
								className='form-input form-input-email'
								id='title'
								type='text'
								value={dataAddArticle.title}
								onChange={e =>
									dispatch({
										type: "dataAddArticle",
										dataAddArticle: { ...dataAddArticle, title: e.target.value },
									})
								}
							/>
							{!errorTitle || <p className='form-error  error-settings'>{errorTitle}</p>}
							{toggleCheckbox || (
								<>
									<label htmlFor='img'>Dodaj zdjęcie</label>
									<input
										className='form-input form-input-img custom-file-input'
										type='file'
										name='file'
										onChange={e =>
											dispatch({
												type: "dataAddArticle",
												dataAddArticle: { ...dataAddArticle, image: e.target.files[0] },
											})
										}
									/>
									{!errorImage || <p className='form-error  error-settings'>{errorImage}</p>}
								</>
							)}
							<div className='form-input checkbox-add-article'>
								<label htmlFor='checkbox'>Nie dodaję zdjecia</label>
								<input
									id='checkbox'
									type='checkbox'
									checked={toggleCheckbox}
									onChange={e =>
										dispatch({
											type: "toggleCheckbox",
											toggleCheckbox: e.target.checked,
										})
									}
								/>
							</div>
							<label htmlFor='description'>Treść</label>
							<textarea
								className='form-textarea'
								id='description'
								value={dataAddArticle.description}
								type='textarea'
								onChange={e =>
									dispatch({
										type: "dataAddArticle",
										dataAddArticle: { ...dataAddArticle, description: e.target.value },
									})
								}
								rows='10'
							></textarea>
							{!errorDescription || (
								<p className='form-error error-settings'>{errorDescription}</p>
							)}
							<button className='btn-form btn-form-login'>Dodaj</button>
						</form>
					</div>
				)}
			</>
		)
	}
}

export default AddArticle
