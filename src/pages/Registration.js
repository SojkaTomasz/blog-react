import { useContext, useEffect, useReducer, useState } from "react"
import { useNavigate } from "react-router-dom"
import LoginContext from "../context/loginContext"
import { initialState, reducer } from "../reducer/reducerForm"
import { reg, specialChars } from "../UI/validation"
import axios from "axios"
import Preloader from "../UI/Preloader"
import "../styles/form.css"
import { firebaseConfig } from "../firebase"

const HTTPS_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseConfig.apiKey}`

function Registration() {
	const [state, dispatch] = useReducer(reducer, initialState)
	const loginContext = useContext(LoginContext)
	const [send, setSend] = useState(false)
	const navigate = useNavigate()

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

		success,
	} = state

	const handleValidateRegister = e => {
		e.preventDefault()
		dispatch({ type: "errorEmail", errorEmail: "" })
		dispatch({ type: "emailToggle", emailToggle: false })
		dispatch({ type: "errorPassword", errorPassword: "" })
		dispatch({ type: "passwordToggle", passwordToggle: false })
		dispatch({ type: "errorRepeatPassword", errorRepeatPassword: "" })
		dispatch({ type: "repeatPasswordToggle", repeatPasswordToggle: false })

		if (!email) {
			dispatch({ type: "errorEmail", errorEmail: "Musisz podać emaila!" })
		} else if (!reg.test(email)) {
			dispatch({ type: "errorEmail", errorEmail: "Email niepoprawny!" })
		} else {
			dispatch({ type: "errorEmail", errorEmail: "" })
			dispatch({ type: "emailToggle", emailToggle: true })
		}

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
		const fetchData = async () => {
			if (emailToggle && passwordToggle && repeatPasswordToggle) {
				setSend(true)
				try {
					const res = await axios.post(HTTPS_URL, {
						email,
						password,
						returnSecureToken: true,
					})
					setSend(false)
					dispatch({ type: "email", email: "" })
					dispatch({ type: "password", password: "" })
					dispatch({ type: "repeatPassword", repeatPassword: "" })
					dispatch({ type: "success", success: true })

					setTimeout(() => {
						loginContext.login({
							email: res.data.email,
							idToken: res.data.idToken,
							localId: res.data.localId,
							photoUrl: null,
						})
						navigate("/panel-uzytkownika")
					}, 3000)
				} catch (ex) {
					setSend(false)
					if (ex.response.data.error.message === "EMAIL_EXISTS") {
						dispatch({ type: "errorEmail", errorEmail: "Email już istnieje!" })
						dispatch({ type: "emailToggle", emailToggle: false })
					}
				}
			}
		}
		fetchData()
	}, [emailToggle, passwordToggle, repeatPasswordToggle])

	useEffect(() => {
		if (loginContext.isLogged) {
			navigate("/panel-uzytkownika")
		}
	}, [loginContext])

	if (success) {
		return (
			<div>
				<h1 className='title-section'>Rejestracja</h1>
				<p className='form-success'>
					GRATULUJE! Rejestracja przebiegła pomyślnie. <br />
					zachwilę zostaniesz piekierowany do Panelu użytkownika.
				</p>
			</div>
		)
	} else {
		return (
			<>
				<div>
					<h1 className='title-section'>Rejestracja</h1>
					{send ? (
						<Preloader />
					) : (
						<form className='box-form-registration' onSubmit={handleValidateRegister}>
							<label htmlFor='email'>Email</label>
							<input
								id='email'
								className='form-input'
								type='email'
								value={email}
								onChange={e => dispatch({ type: "email", email: e.target.value })}
							/>
							{!errorEmail || <p className='form-error'>{errorEmail}</p>}
							<label htmlFor='password'>Hasło</label>
							<input
								id='password'
								className='form-input'
								type='password'
								value={password}
								onChange={e => dispatch({ type: "password", password: e.target.value })}
							/>
							{!errorPassword || <p className='form-error'>{errorPassword}</p>}
							<label htmlFor='repeatPassword'>Powtórz Hasło</label>
							<input
								className='form-input'
								type='password'
								id='repeatPassword'
								value={repeatPassword}
								onChange={e =>
									dispatch({ type: "repeatPassword", repeatPassword: e.target.value })
								}
							/>
							{!errorRepeatPassword || <p className='form-error'>{errorRepeatPassword}</p>}
							<button className='btn-form btn-form-registration'>Rejestruj</button>
						</form>
					)}
				</div>
			</>
		)
	}
}

export default Registration
