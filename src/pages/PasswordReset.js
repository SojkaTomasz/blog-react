import { initialState, reducer } from "../reducer/reducerForm"
import { useNavigate, Link } from "react-router-dom"
import { useReducer } from "react"
import { firebaseConfig } from "../firebase"
import axios from "axios"

const HTTPS_URL = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${firebaseConfig.apiKey}`

function PasswordReset() {
	const [state, dispatch] = useReducer(reducer, initialState)
	const navigation = useNavigate()

	const handleLogin = e => {
		e.preventDefault()
		dispatch({ type: "errorEmail", errorEmail: "" })
		const fetchData = async () => {
			try {
				await axios.post(HTTPS_URL, {
					requestType: "PASSWORD_RESET",
					email: state.email,
				})
				dispatch({ type: "success", success: true })
				setTimeout(() => {
					dispatch({ type: "success", success: false })
					navigation("/login")
				}, 5000)
			} catch (ex) {
				console.log(ex.response.data.error.message)
				if (ex.response.data.error.message === "EMAIL_NOT_FOUND") {
					dispatch({ type: "errorEmail", errorEmail: "Hasła nie znalezione w bazie!" })
				} else {
					dispatch({ type: "errorEmail", errorEmail: "Niepoprawny email!" })
				}
			}
		}
		fetchData()
	}

	if (state.success) {
		return (
			<div>
				<h1 className='title-section'>Resetuj hasło</h1>
				<p className='form-success'>SUKCES! sprawdz skrzynkę pocztową!</p>
			</div>
		)
	}
	return (
		<>
			<div>
				<h1 className='title-section'>Resetuj hasło</h1>
				<form className='box-form-login' action=''>
					<label htmlFor='email'>Email </label>
					<input
						id='email'
						className='form-input'
						type='email'
						value={state.email}
						onChange={e => dispatch({ type: "email", email: e.target.value })}
					/>
					{!state.errorEmail || <p className='form-error'>{state.errorEmail}</p>}
					<input
						className='btn-form btn-form-login'
						onClick={handleLogin}
						type='submit'
						value='Wyślij'
					/>
					<Link className='password-recovery' to='/login'>
						Wróć do logowania
					</Link>
				</form>
			</div>
		</>
	)
}

export default PasswordReset
