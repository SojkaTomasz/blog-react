import { useContext, useEffect, useReducer } from "react"
import { initialState, reducer } from "../../../reducer/reducerArticle"
import EditArticleContext from "../../../context/editArticleContext"
import LoginContext from "../../../context/loginContext"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { storage, firebaseConfig } from "../../../firebase"
import axios from "axios"
import { v4 } from "uuid"
import "./styles/popUpEditArticle.css"

const HTTPS_URL = `${firebaseConfig.databaseURL}/articles.json`

function PopUpEditArticle() {
	const [state, dispatch] = useReducer(reducer, initialState)

	const {
		dataEditArticle,
		imageEditArticle,
		errorTitle,
		errorImage,
		errorDescription,
		toggleTitle,
		toggleImage,
		toggleDescription,
		toggleCheckbox,
	} = state

	const editArticleContext = useContext(EditArticleContext)
	const loginContext = useContext(LoginContext)

	useEffect(() => {
		fetchArticle()
	}, [editArticleContext.showPopUpEdit])

	const fetchArticle = async () => {
		try {
			const res = await axios.get(HTTPS_URL)
			let selectedArticle = {}
			for (const key in res.data) {
				if (key === editArticleContext.idArticleEdit) {
					selectedArticle = { ...res.data[key], id: key }
				}
			}
			dispatch({
				type: "imageEditArticle",
				imageEditArticle: selectedArticle.image || null,
			})
			dispatch({ type: "dataEditArticle", dataEditArticle: selectedArticle })
		} catch (ex) {
			console.log(ex)
		}
	}

	const handleEditArticle = async e => {
		e.preventDefault()
		dispatch({ type: "errorTitle", errorTitle: "" })
		dispatch({ type: "toggleTitle", toggleTitle: false })
		dispatch({ type: "errorImage", errorImage: "" })
		dispatch({ type: "toggleImage", toggleImage: false })
		dispatch({ type: "errorDescription", errorDescription: "" })
		dispatch({ type: "toggleDescription", toggleDescription: false })

		if (!dataEditArticle.title) {
			dispatch({ type: "errorTitle", errorTitle: "Musisz podać tytuł!" })
		} else {
			dispatch({ type: "errorTitle", errorTitle: "" })
			dispatch({ type: "toggleTitle", toggleTitle: true })
		}

		if (toggleCheckbox && !dataEditArticle.image) {
			dispatch({
				type: "errorImage",
				errorImage: "Dodaj zdjęcie artykułu lub odznacz poniżej!",
			})
		} else if (toggleCheckbox && dataEditArticle.image === imageEditArticle) {
			dispatch({
				type: "errorImage",
				errorImage: "Dodaj nowe zdjęcie lub odznacz poniżej!",
			})
		} else {
			dispatch({ type: "errorImage", errorImage: "" })
			dispatch({ type: "toggleImage", toggleImage: true })
		}

		if (!dataEditArticle.description) {
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
			editArticle()
		}
	}, [toggleImage, toggleTitle, toggleDescription])

	const editArticle = async () => {
		try {
			let imageUrl = dataEditArticle.image
			if (toggleCheckbox) {
				const imageRef = ref(storage, `images/${dataEditArticle.image.name + v4()}`)
				await uploadBytes(imageRef, dataEditArticle.image)
				imageUrl = await getDownloadURL(imageRef)
			}
			const changedArticleData = {
				[dataEditArticle.id]: {
					author: loginContext.dataUser.email,
					photoUserUrl: loginContext.dataUser.photoUserUrl,
					datePublication: new Date(dataEditArticle.datePublication).toJSON(),
					description: dataEditArticle.description,
					image: imageUrl,
					title: dataEditArticle.title,
				},
			}
			await axios.patch(HTTPS_URL, changedArticleData)
			editArticleContext.showPopUpEditFunction(null)
			window.location.reload()
		} catch (error) {
			console.error("Błąd:", error)
		}
	}

	return (
		<>
			{dataEditArticle ? (
				<div className='box-popup-edit'>
					<div>
						<h2>Edycja artykułu</h2>
						<form className='box-form-edit-article' onSubmit={handleEditArticle}>
							<label htmlFor='title'>Tytuł</label>
							<input
								className='form-input form-input-email'
								id='title'
								type='text'
								value={dataEditArticle.title}
								onChange={e =>
									dispatch({
										type: "dataEditArticle",
										dataEditArticle: { ...dataEditArticle, title: e.target.value },
									})
								}
							/>
							{!errorTitle || <p className='form-error  error-tings'>{errorTitle}</p>}
							{!toggleCheckbox || (
								<>
									<label htmlFor='img'>Dodaj nowe zdjęcie</label>
									<input
										className='form-input form-input-img custom-file-input'
										id='img'
										type='file'
										name='file'
										onChange={e =>
											dispatch({
												type: "dataEditArticle",
												dataEditArticle: { ...dataEditArticle, image: e.target.files[0] },
											})
										}
									/>

									{!errorImage || <p className='form-error  error-tings'>{errorImage}</p>}
								</>
							)}
							{toggleCheckbox || (
								<>
									<p>Aktualne zdjęcie:</p>
									{dataEditArticle.image ? (
										<img className='img-edit-article' src={dataEditArticle.image} alt='' />
									) : (
										<p>
											<strong>Brak zdjęcia</strong>
										</p>
									)}
								</>
							)}
							<div className='form-input checkbox-add-article'>
								{dataEditArticle.image ? (
									<label htmlFor=''>Czy chcesz zmienić zdjęcie?</label>
								) : (
									<label htmlFor=''>Czy chcesz dodać zdjęcie?</label>
								)}
								<input
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
								value={dataEditArticle.description}
								type='textarea'
								onChange={e =>
									dispatch({
										type: "dataEditArticle",
										dataEditArticle: { ...dataEditArticle, description: e.target.value },
									})
								}
								rows='8'
							></textarea>
							{!errorDescription || (
								<p className='form-error error-tings'>{errorDescription}</p>
							)}
							<div className='box-btn-edit-popup'>
								<button className='btn-form btn-edit-popup'>Edytuj</button>
								<button
									className='btn-form btn-edit-popup'
									onClick={() => editArticleContext.showPopUpEditFunction(null)}
								>
									Anuluj
								</button>
							</div>
						</form>
					</div>
				</div>
			) : null}
		</>
	)
}

export default PopUpEditArticle
