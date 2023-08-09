import { useContext, useEffect, useReducer, useState } from "react"
import { initialState, reducer } from "../../../reducer/reducerForm"
import { reg, specialChars } from "../../../UI/validation"
import LoginContext from "../../../context/loginContext"
import Preloader from "../../../UI/Preloader"
import axios from "axios"
import { firebaseConfig } from "../../../firebase"

const HTTPS_URL = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${firebaseConfig.apiKey}`

function ChangePassword() {
	const [state, dispatch] = useReducer(reducer, initialState)
	const loginContext = useContext(LoginContext)
	const [toggleChangingData, setToggleChangingData] = useState(false)

	const {
		password,
		errorPassword,
		passwordToggle,

		repeatPassword,
		errorRepeatPassword,
		repeatPasswordToggle,

		changePasswordToggle,
		changePasswordSuccess,
	} = state

	const handleValidateChangePassword = e => {
		e.preventDefault()
		dispatch({ type: "errorPassword", errorPassword: "" })
		dispatch({ type: "passwordToggle", passwordToggle: false })
		dispatch({ type: "errorRepeatPassword", errorRepeatPassword: "" })
		dispatch({ type: "repeatPasswordToggle", repeatPasswordToggle: false })

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
		} else if (loginContext.dataUser.localId === "nPX6h1SzE4TYXh7kktlB489Apzv2") {
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
		if (repeatPasswordToggle && passwordToggle) {
			changePassword()
		}
	}, [repeatPasswordToggle, passwordToggle])

	const changePassword = async () => {
		try {
			setToggleChangingData(true)
			const res = await axios.post(HTTPS_URL, {
				idToken: loginContext.dataUser.idToken,
				password,
				returnSecureToken: true,
			})

			loginContext.login({
				email: res.data.email,
				idToken: res.data.idToken,
				localId: res.data.localId,
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
			console.error(ex.response.data.error.message)
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

	return (
		<>
			{toggleChangingData ? (
				<Preloader />
			) : (
				<div>
					{changePasswordSuccess && (
						<p className='success-settings'>{changePasswordSuccess}</p>
					)}
					{changePasswordToggle ? (
						<form className='box-settings' onSubmit={handleValidateChangePassword}>
							<label className='label-settings' htmlFor='password'>
								Hasło
							</label>
							<input
								id='password'
								className='form-input'
								type='password'
								value={password}
								onChange={e => dispatch({ type: "password", password: e.target.value })}
							/>
							{errorPassword && <p className='form-error error-settings'>{errorPassword}</p>}
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
							<button className='btn-form btn-settings'>Zmień</button>
							<button className='btn-form btn-settings' onClick={clickChange}>
								Anuluj
							</button>
							{errorRepeatPassword && (
								<p className='form-error error-settings'>{errorRepeatPassword}</p>
							)}
						</form>
					) : (
						<button className='btn-form btn-settings' onClick={clickChange}>
							Zmień hasło
						</button>
					)}
				</div>
			)}
		</>
	)
}

export default ChangePassword
