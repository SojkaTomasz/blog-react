import { useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { storage, firebaseConfig } from "../../firebase"
import LoginContext from "../../context/loginContext"
import Preloader from "../../UI/Preloader"
import axios from "axios"
import { v4 } from "uuid"

const HTTPS_URL = `${firebaseConfig.databaseURL}/articles.json`

function AddArticle() {
	const [dateArticle, setDateArticle] = useState({
		author: "",
		title: "",
		description: "",
		image: null,
		datePublication: String(new Date()),
	})

	const [errorTitle, setErrorTitle] = useState("")
	const [errorImage, setErrorImage] = useState("")
	const [errorDescription, setErrorDescription] = useState("")
	const [toggleTitle, setToggleTitle] = useState(false)
	const [toggleImage, setToggleImage] = useState(false)
	const [toggleDescription, setToggleDescription] = useState(false)
	const [toggleCheckbox, setToggleCheckbox] = useState(false)
	const [addingArticle, setToggleAddingArticle] = useState(false)

	const loginContext = useContext(LoginContext)
	const navigate = useNavigate()

	const handleAddArticle = async e => {
		e.preventDefault()
		try {
			const res = await axios.get(`${HTTPS_URL}`)
			let allArticles = []
			for (const key in res.data) {
				allArticles.push({ ...res.data[key], id: key })
			}
			const findArticles = allArticles.filter(x => x.title === dateArticle.title)
			if (!dateArticle.title) {
				setErrorTitle("Musisz podać tytuł!")
			} else if (findArticles.length > 0) {
				setErrorTitle("Masz już artykuł o tym samym tytule!")
			} else {
				setErrorTitle("")
				setToggleTitle(true)
			}
		} catch (error) {
			console.error("Błąd:", error)
		}
		if (!toggleCheckbox) {
			if (!dateArticle.image) {
				setErrorImage("Dodaj zdjęcie artykułu!")
			} else {
				setErrorImage("")
				setToggleImage(true)
			}
		} else {
			setErrorImage("")
			setToggleImage(true)
		}

		if (!dateArticle.description) {
			setErrorDescription("Dodaj Treść artykułu!")
		} else {
			setErrorDescription("")
			setToggleDescription(true)
		}
	}

	useEffect(() => {
		if (toggleImage && toggleTitle && toggleDescription) {
			setToggleAddingArticle(true)
			addArticle()
		}
	}, [toggleImage, toggleTitle, toggleDescription])

	const addArticle = async () => {
		try {
			let imageUrl = null
			if (!toggleCheckbox) {
				const imageRef = ref(storage, `images/${dateArticle.image.name + v4()}`)
				await uploadBytes(imageRef, dateArticle.image)
				imageUrl = await getDownloadURL(imageRef)
			}
			const articleData = {
				author: loginContext.dateUser.email || "Anonimowy",
				title: dateArticle.title,
				description: dateArticle.description,
				image: imageUrl,
				datePublication: dateArticle.datePublication,
			}
			await axios.post(HTTPS_URL, articleData)
			navigate("/panel-uzytkownika/wszystkie-artykuły")
		} catch (ex) {
			console.error(ex)
		}
	}

	if (!loginContext.dateUser) {
		return <Preloader />
	} else {
		return (
			<>
				{addingArticle ? (
					<Preloader />
				) : (
					<div>
						<form className='box-form-add-article' onSubmit={handleAddArticle}>
							<label htmlFor='title'>Tytuł</label>
							<input
								className='form-input form-input-email'
								id='title'
								type='text'
								value={dateArticle.title}
								onChange={e => setDateArticle({ ...dateArticle, title: e.target.value })}
							/>
							{!errorTitle || <p className='form-error  error-settings'>{errorTitle}</p>}
							{toggleCheckbox || (
								<>
									<label htmlFor='img'>Dodaj zdjęcie</label>
									<input
										className='form-input form-input-img'
										type='file'
										name='file'
										onChange={e => setDateArticle({ ...dateArticle, image: e.target.files[0] })}
									/>
									{!errorImage || <p className='form-error  error-settings'>{errorImage}</p>}
								</>
							)}
							<div className='form-input checkbox-add-article'>
								<label htmlFor=''>Nie dodaję zdjecia</label>
								<input
									type='checkbox'
									checked={toggleCheckbox}
									onChange={e => setToggleCheckbox(e.target.checked)}
								/>
							</div>
							<label htmlFor='description'>Treść</label>
							<textarea
								className='form-textarea'
								id='description'
								value={dateArticle.description}
								type='textarea'
								onChange={e => setDateArticle({ ...dateArticle, description: e.target.value })}
								rows='10'
							></textarea>
							{!errorDescription || (
								<p className='form-error error-settings'>{errorDescription}</p>
							)}
							<button className='btn-form btn-form-login' type='submit'>
								Dodaj
							</button>
						</form>
					</div>
				)}
			</>
		)
	}
}

export default AddArticle
