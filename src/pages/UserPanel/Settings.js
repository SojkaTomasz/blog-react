import { useContext, useEffect, useReducer, useState } from "react"
import { initialState, reducer } from "../../reducer/reducerForm"
import { reg, specialChars } from "../../UI/validation"
import LoginContext from "../../context/loginContext"
import Preloader from "../../UI/Preloader"
import axios from "axios"
import { firebaseConfig } from "../../firebase"

const HTTPS_URL = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${firebaseConfig.apiKey}`

function Settings() {
	const [state, dispatch] = useReducer(reducer, initialState)
	const loginContext = useContext(LoginContext)
	const [toggleChangingData, setToggleChangingData] = useState(false)

	const {
		email,
		errorEmail,
		emailToggle,

		password,
		errorPassword,
		passwordToggle,

		repeatPassword,
		errorRepeatPassword,
		repeatPasswordToggle,

		changeEmailToggle,
		changeEmailSuccess,
		changePasswordToggle,
		changePasswordSuccess,
	} = state

	const handleValidateEmail = e => {
		e.preventDefault()
		if (!email) {
			dispatch({ type: "errorEmail", errorEmail: "Musisz podać emaila!" })
		} else if (!reg.test(email)) {
			dispatch({ type: "errorEmail", errorEmail: "Email niepoprawny!" })
		} else if (loginContext.dateUser.email === email) {
			dispatch({
				type: "errorEmail",
				errorEmail: "Email musi być inny niż aktualny!",
			})
		} else if (loginContext.dateUser.localId === "e5w3K8ycToest1wCZVMePNOjMfv1") {
			dispatch({
				type: "errorEmail",
				errorEmail: "TO KONTO NIE MA MOŻLIWOŚCI ZMIAN!",
			})
		} else {
			dispatch({ type: "errorEmail", errorEmail: "" })
			dispatch({ type: "emailToggle", emailToggle: true })
		}
	}

	const handleValidatePassword = e => {
		e.preventDefault()
		if (password.length < 8) {
			dispatch({ type: "errorPassword", errorPassword: "Musisz podać min 8 znaków!" })
		} else if (!/[A-Z]/.test(password)) {
			dispatch({
				type: "errorPassword",
				errorPassword:
					"Hasło musi posiadać minimum jedną wielką literę oraz jeden znak specjalny",
			})
		} else if (/^[A-Z]+$/.test(password)) {
			dispatch({
				type: "errorPassword",
				errorPassword:
					"Hasło musi posiadać minimum jedną małą literę oraz jeden znak specjalny",
			})
		} else if (!specialChars.test(password)) {
			dispatch({
				type: "errorPassword",
				errorPassword: "Hasło musi posiadać chociaż jeden znak specjalny",
			})
		} else if (loginContext.dateUser.localId === "e5w3K8ycToest1wCZVMePNOjMfv1") {
			dispatch({
				type: "errorPassword",
				errorPassword: "TO KONTO NIE MA MOŻLIWOŚCI ZMIAN!",
			})
		} else {
			dispatch({ type: "errorPassword", errorPassword: "" })
			dispatch({ type: "passwordToggle", passwordToggle: true })
		}

		if (repeatPassword !== password) {
			dispatch({
				type: "errorRepeatPassword",
				errorRepeatPassword: "Hasła nie pasują do siebie!",
			})
		} else {
			dispatch({ type: "errorRepeatPassword", errorRepeatPassword: "" })
			dispatch({ type: "repeatPasswordToggle", repeatPasswordToggle: true })
		}
	}

	useEffect(() => {
		if (emailToggle) {
			changeEmail()
		}
		if (repeatPasswordToggle && passwordToggle) {
			changePassword()
		}
	}, [emailToggle, passwordToggle, repeatPasswordToggle])

	const changeEmail = async () => {
		try {
			setToggleChangingData(true)
			const res = await axios.post(HTTPS_URL, {
				idToken: loginContext.dateUser.idToken,
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
			setToggleChangingData(false)
			if (ex.response.data.error.message === "EMAIL_EXISTS") {
				dispatch({ type: "errorEmail", errorEmail: "Email już istnieje!" })
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

	const changePassword = async () => {
		try {
			setToggleChangingData(true)
			const res = await axios.post(HTTPS_URL, {
				idToken: loginContext.dateUser.idToken,
				password,
				returnSecureToken: true,
			})

			loginContext.login({
				email: res.data.email,
				idToken: res.data.idToken,
				userId: res.data.localId,
			})
			dispatch({ type: "password", password: "" })
			dispatch({ type: "repeatPassword", repeatPassword: "" })
			dispatch({
				type: "changePasswordSuccess",
				changePasswordSuccess: "Hasło zostało zmienione poprawnie!",
			})
			dispatch({ type: "passwordToggle", passwordToggle: false })
			dispatch({ type: "repeatPasswordToggle", repeatPasswordToggle: false })
			dispatch({ type: "changePasswordToggle", changePasswordToggle: false })
			setToggleChangingData(false)
		} catch (ex) {
			setToggleChangingData(false)
			if (ex.response.data.error.message) {
				dispatch({
					type: "errorPassword",
					errorPassword: String(ex.response.data.error.message).replaceAll("_", " "),
				})
				dispatch({ type: "passwordToggle", passwordToggle: false })
			}
		}
	}

	const clickChange = e => {
		e.preventDefault()
		if (e.target.id === "email") {
			dispatch({ type: "changeEmailToggle", changeEmailToggle: !changeEmailToggle })
			dispatch({ type: "email", email: "" })
			dispatch({ type: "errorEmail", errorEmail: "" })
			dispatch({
				type: "changeEmailSuccess",
				changeEmailSuccess: "",
			})
		} else {
			dispatch({
				type: "changePasswordToggle",
				changePasswordToggle: !changePasswordToggle,
			})
			dispatch({ type: "password", password: "" })
			dispatch({ type: "repeatPassword", repeatPassword: "" })
			dispatch({ type: "errorPassword", errorPassword: "" })
			dispatch({ type: "errorRepeatPassword", errorRepeatPassword: "" })
			dispatch({
				type: "changePasswordSuccess",
				changePasswordSuccess: "",
			})
		}
	}

	if (!loginContext.dateUser) {
		return <Preloader />
	} else {
		return (
			<>
				{toggleChangingData ? (
					<Preloader />
				) : (
					<form className='box-settings' action=''>
						<span>
							Twój aktualny email: <strong>{loginContext.dateUser.email}</strong>
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
										onClick={handleValidateEmail}
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
						<span className='success-settings'>{changePasswordSuccess}</span>
						<div className='box-settings'>
							{changePasswordToggle ? (
								<>
									<label className='label-settings' htmlFor='password'>
										Hasło{" "}
									</label>
									<input
										id='password'
										className='form-input'
										type='password'
										value={password}
										onChange={e => dispatch({ type: "password", password: e.target.value })}
									/>
									{!errorPassword || <p className='form-error error-settings'>{errorPassword}</p>}
									<label className='label-settings' htmlFor='repeatPassword'>
										Powtórz Hasło
									</label>
									<input
										className='form-input'
										type='password'
										id='repeatPassword'
										value={repeatPassword}
										onChange={e =>
											dispatch({ type: "repeatPassword", repeatPassword: e.target.value })
										}
									/>
									<input
										className='btn-form btn-settings'
										onClick={handleValidatePassword}
										type='submit'
										value='Zmień'
									/>
									<button className='btn-form btn-settings' id='password' onClick={clickChange}>
										Anuluj
									</button>
									{!errorRepeatPassword || (
										<p className='form-error error-settings'>{errorRepeatPassword}</p>
									)}
								</>
							) : (
								<button className='btn-form btn-settings' id='password' onClick={clickChange}>
									Zmień hasło
								</button>
							)}
						</div>
					</form>
				)}
			</>
		)
	}
}

export default Settings
