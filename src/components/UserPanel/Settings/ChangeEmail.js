import { useContext, useEffect, useReducer, useState } from "react"
import { initialState, reducer } from "../../../reducer/reducerForm"
import { reg } from "../../../UI/validation"
import LoginContext from "../../../context/loginContext"
import Preloader from "../../../UI/Preloader"
import axios from "axios"
import { firebaseConfig } from "../../../firebase"

const HTTPS_URL = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${firebaseConfig.apiKey}`

function ChangeEmail() {
	const [state, dispatch] = useReducer(reducer, initialState)
	const loginContext = useContext(LoginContext)
	const [toggleChangingData, setToggleChangingData] = useState(false)

	const {
		email,
		errorEmail,
		emailToggle,

		changeEmailToggle,
		changeEmailSuccess,
	} = state

	const handleValidateChangeEmail = e => {
		e.preventDefault()
		if (!email) {
			dispatch({ type: "errorEmail", errorEmail: "Musisz podać emaila!" })
		} else if (!reg.test(email)) {
			dispatch({ type: "errorEmail", errorEmail: "Email niepoprawny!" })
		} else if (loginContext.dataUser.email === email) {
			dispatch({
				type: "errorEmail",
				errorEmail: "Email musi być inny niż aktualny!",
			})
		} else if (loginContext.dataUser.localId === "e5w3K8ycToest1wCZVMePNOjMfv1") {
			dispatch({
				type: "errorEmail",
				errorEmail: "TO KONTO NIE MA MOŻLIWOŚCI ZMIAN!",
			})
		} else {
			dispatch({ type: "errorEmail", errorEmail: "" })
			dispatch({ type: "emailToggle", emailToggle: true })
		}
	}

	useEffect(() => {
		if (emailToggle) {
			changeEmail()
		}
	}, [emailToggle])

	const changeEmail = async () => {
		try {
			console.log("ok")
			setToggleChangingData(true)
			const res = await axios.post(HTTPS_URL, {
				idToken: loginContext.dataUser.idToken,
				email,
				returnSecureToken: true,
			})
			loginContext.login({
				email: res.data.email,
				idToken: res.data.idToken,
				userId: res.data.localId,
			})
			dispatch({ type: "email", email: "" })
			dispatch({
				type: "changeEmailSuccess",
				changeEmailSuccess: "Email został zmieniony poprawnie!",
			})
			dispatch({ type: "emailToggle", emailToggle: false })
			dispatch({ type: "changeEmailToggle", changeEmailToggle: false })
			setToggleChangingData(false)
		} catch (ex) {
			console.error(ex.response.data.error.message)
			setToggleChangingData(false)
			if (ex.response.data.error.message === "EMAIL_EXISTS") {
				dispatch({ type: "errorEmail", errorEmail: "Email już istnieje w bazie!" })
				dispatch({ type: "emailToggle", emailToggle: false })
			} else {
				dispatch({
					type: "errorEmail",
					errorEmail: String(ex.response.data.error.message).replaceAll("_", " "),
				})
				dispatch({ type: "emailToggle", emailToggle: false })
			}
		}
	}

	const clickChange = e => {
		e.preventDefault()
		dispatch({ type: "changeEmailToggle", changeEmailToggle: !changeEmailToggle })
		dispatch({ type: "email", email: "" })
		dispatch({ type: "errorEmail", errorEmail: "" })
		dispatch({
			type: "changeEmailSuccess",
			changeEmailSuccess: "",
		})
	}

	if (!loginContext.dataUser) {
		return <Preloader />
	} else {
		return (
			<>
				{toggleChangingData ? (
					<Preloader />
				) : (
					<form className='box-settings' action=''>
						<span>
							Twój aktualny email: <strong>{loginContext.dataUser.email}</strong>
						</span>
						<br />
						<span className='success-settings'>{changeEmailSuccess}</span>
						<div className='box-settings'>
							{changeEmailToggle ? (
								<>
									<label className='label-settings' htmlFor='email'></label>
									<input
										id='email'
										className='form-input'
										type='email'
										value={email}
										placeholder='Wpisz nowy email'
										onChange={e => dispatch({ type: "email", email: e.target.value })}
									/>
									<input
										className='btn-form btn-settings'
										onClick={handleValidateChangeEmail}
										type='submit'
										value='Zmień'
									/>
									<button className='btn-form btn-settings' id='email' onClick={clickChange}>
										Anuluj
									</button>
									{!errorEmail || <p className='form-error error-settings'>{errorEmail}</p>}
								</>
							) : (
								<button className='btn-form btn-settings' id='email' onClick={clickChange}>
									Zmień email
								</button>
							)}
						</div>
					</form>
				)}
			</>
		)
	}
}

export default ChangeEmail
