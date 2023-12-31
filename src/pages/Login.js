import { useContext, useReducer, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import { initialState, reducer } from "../reducer/reducerForm"
import { firebaseConfig } from "../firebase"
import LoginContext from "../context/loginContext"
import axios from "axios"
import "../styles/form.css"

const HTTPS_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`

function Login() {
	const [state, dispatch] = useReducer(reducer, initialState)
	const loginContext = useContext(LoginContext)
	const navigate = useNavigate()

	const { email, password, errorLogin } = state

	const handleLogin = e => {
		e.preventDefault()
		dispatch({ type: "errorLogin", errorLogin: "" })
		const fetchData = async () => {
			try {
				const res = await axios.post(HTTPS_URL, {
					email,
					password,
					returnSecureToken: true,
				})
				console.log(res);
				loginContext.login({
					email: res.data.email,
					idToken: res.data.idToken,
					localId: res.data.localId,
					photoUserUrl: res.data.profilePicture || null,
				})
				navigate("/panel-uzytkownika")
			} catch (ex) {
				console.log(ex.response.data.error.message)
				if (
					ex.response.data.error.message ===
					"TOO_MANY_ATTEMPTS_TRY_LATER : Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later."
				) {
					dispatch({
						type: "errorLogin",
						errorLogin: "Zbyt wiele prób, spróbuj ponownie później!",
					})
				} else {
					dispatch({ type: "errorLogin", errorLogin: "Niepoprawny email lub hasło!" })
				}
			}
		}
		fetchData()
	}

	useEffect(() => {
		if (loginContext.isLogged) {
			navigate("/panel-uzytkownika")
		}
	}, [loginContext])

	return (
		<div>
			<h1 className='title-section'>Logowanie</h1>
			<form className='box-form-login' onSubmit={handleLogin}>
				<label htmlFor='email'>Email</label>
				<input
					id='email'
					className='form-input'
					type='email'
					value={email}
					onChange={e => dispatch({ type: "email", email: e.target.value })}
				/>
				<label htmlFor='password'>Hasło</label>
				<input
					id='password'
					className='form-input'
					type='password'
					value={password}
					onChange={e => dispatch({ type: "password", password: e.target.value })}
				/>
				{!errorLogin || <p className='form-error'>{errorLogin}</p>}
				<button className='btn-form btn-form-login'>Zaloguj</button>
				<Link className='password-recovery' to='/reset-hasla'>
					Nie pamiętam hasła...
				</Link>
			</form>
		</div>
	)
}

export default Login
