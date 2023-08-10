import { useContext, useState } from "react"
import LoginContext from "../../../context/loginContext"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { storage, firebaseConfig } from "../../../firebase"
import Preloader from "../../../UI/Preloader"
import user from "../../../images/user.png"
import axios from "axios"
import { v4 } from "uuid"

const HTTPS_URL = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${firebaseConfig.apiKey}`

const HTTPS_URL_databaseURL = `${firebaseConfig.databaseURL}/user-data.json`

function AddPhoto() {
	const loginContext = useContext(LoginContext)
	const [errorInfo, setErrorInfo] = useState("")
	const [toggleAddPhoto, setToggleAddPhoto] = useState(false)
	const [toggleChangingData, setToggleChangingData] = useState(false)
	const [photo, setPhoto] = useState()

	const addPhoto = async () => {
		try {
			if (photo) {
				setToggleChangingData(true)
				let imageUrl = null
				if (!loginContext.dataUser.photoUrl) {
					const photoId = v4()
					await axios.post(HTTPS_URL_databaseURL, {
						localId: loginContext.dataUser.localId,
						photoId: photoId,
					})
					const imageRef = ref(storage, `images-user/${photoId}`)
					await uploadBytes(imageRef, photo)
					imageUrl = await getDownloadURL(imageRef)
				} else {
					const res = await axios.get(HTTPS_URL_databaseURL)
					let dataUsers = []
					for (const key in res.data) {
						dataUsers.push({ ...res.data[key], id: key })
					}
					const findUser = dataUsers.filter(
						user => user.localId === loginContext.dataUser.localId
					)
					const imageRef = ref(storage, `images-user/${findUser[0].photoId}`)
					await uploadBytes(imageRef, photo)
					imageUrl = await getDownloadURL(imageRef)
				}
				const articleData = {
					idToken: loginContext.dataUser.idToken,
					photoUrl: imageUrl,
				}
				const res = await axios.post(HTTPS_URL, articleData)
				loginContext.login({
					email: res.data.email,
					idToken: loginContext.dataUser.idToken,
					localId: res.data.localId,
					photoUrl: imageUrl,
				})
				setToggleChangingData(false)
				setToggleAddPhoto(false)
				setPhoto()
				setErrorInfo("")
			} else {
				setToggleChangingData(false)
				setErrorInfo("Musisz dodać fotografię!")
			}
		} catch (ex) {
			console.log(ex)
		}
	}

	if (!loginContext.dataUser) {
		return <Preloader />
	} else {
		return (
			<>
				{toggleChangingData ? (
					<Preloader />
				) : (
					<div>
						{toggleAddPhoto ? (
							<>
								<input
									className='custom-file-input'
									type='file'
									name='file'
									onChange={e => setPhoto(e.target.files[0])}
								/>

								{loginContext.dataUser.photoUrl ? (
									<button className='btn-form btn-settings' onClick={addPhoto}>
										aktualizuj
									</button>
								) : (
									<button className='btn-form btn-settings' onClick={addPhoto}>
										Dodaj
									</button>
								)}
								<button
									className='btn-form btn-settings'
									onClick={() => setToggleAddPhoto(!toggleAddPhoto)}
								>
									Anuluj
								</button>
								{!errorInfo || <p className='form-error  error-settings'>{errorInfo}</p>}
							</>
						) : (
							<>
								{loginContext.dataUser.photoUrl ? (
									<button
										className='btn-form btn-settings'
										onClick={() => setToggleAddPhoto(!toggleAddPhoto)}
									>
										Aktualizuj zdjęcie
									</button>
								) : (
									<button
										className='btn-form btn-settings'
										onClick={() => setToggleAddPhoto(!toggleAddPhoto)}
									>
										Dodaj zdjęcie
									</button>
								)}
							</>
						)}

						<div>
							{loginContext.dataUser.photoUrl ? (
								<img
									style={{ width: 200, borderRadius: "50%" }}
									src={loginContext.dataUser.photoUrl}
									alt=''
								/>
							) : (
								<img style={{ width: 200, borderRadius: "50%" }} src={user} alt='' />
							)}
						</div>
					</div>
				)}
			</>
		)
	}
}

export default AddPhoto
