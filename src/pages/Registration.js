import { useContext, useEffect, useReducer, useState } from "react"
import { useNavigate } from "react-router-dom"
import LoginContext from "../context/loginContext"
import { initialState, reducer } from "../reducer/reducerForm"
import { reg, specialChars } from "../UI/validation"
import axios from "axios"
import "../styles/form.css"

const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY
const HTTPS_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`

function Registration() {
	const [state, dispatch] = useReducer(reducer, initialState)
	const isLogged = useContext(LoginContext)
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

	const handleRegister = async e => {
		e.preventDefault()
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
			dispatch({ type: "passwordToggle" })
		}

		if (repeatPassword !== password) {
			dispatch({
				type: "errorRepeatPassword",
				errorRepeatPassword: "Hasła nie pasują do siebie!",
			})
		} else {
			dispatch({ type: "errorRepeatPassword", errorRepeatPassword: "" })
			dispatch({ type: "repeatPasswordToggle" })
		}
	}

	useEffect(() => {
		const fetchData = async () => {
			if (emailToggle && passwordToggle && repeatPasswordToggle) {
				try {
					const res = await axios.post(HTTPS_URL, {
						email,
						password,
						returnSecureToken: true,
					})
					dispatch({ type: "email", email: "" })
					dispatch({ type: "password", password: "" })
					dispatch({ type: "repeatPassword", repeatPassword: "" })
					dispatch({ type: "success", success: true })

					setTimeout(() => {
						isLogged.login({
							email: res.data.email,
							token: res.data.idToken,
							userId: res.data.localId,
						})
						navigate("/panel-uzytkownika")
					}, 5000)
				} catch (ex) {
					if (ex.response.data.error.message === "EMAIL_EXISTS") {
						dispatch({ type: "errorEmail", errorEmail: "Email już istnieje!" })
						dispatch({ type: "emailToggle", emailToggle: false })
					}
				}
			}
		}
		fetchData()
	}, [
		emailToggle,
		passwordToggle,
		repeatPasswordToggle,
		email,
		password,
		repeatPassword,
	])

	if (!success) {
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
			<div>
				<h1 className='title-section'>Rejestracja</h1>
				<form className='box-form-registration' action=''>
					<label htmlFor='email'>Email </label>
					<input
						id='email'
						className='form-input'
						type='email'
						value={email}
						onChange={e => dispatch({ type: "email", email: e.target.value })}
					/>
					{!errorEmail || <p className='form-error'>{errorEmail}</p>}
					<label htmlFor='password'>Hasło </label>
					<input
						id='password'
						className='form-input'
						type='password'
						value={password}
						onChange={e => dispatch({ type: "password", password: e.target.value })}
					/>
					{!errorPassword || <p className='form-error'>{errorPassword}</p>}
					<label htmlFor='repeatPassword'>Powtórz Hasło </label>
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
					<input
						className='btn-form btn-form-registration'
						onClick={handleRegister}
						type='submit'
						value='Rejestruj'
					/>
				</form>
			</div>
		)
	}
}

export default Registration
