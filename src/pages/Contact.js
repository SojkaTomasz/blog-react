import { useEffect, useState } from "react"
import "../styles/form.css"
import { useReducer } from "react"
import { initialState, reducer } from "../reducer/reducerForm"
import { reg, pattern } from "../UI/validation"
import { useNavigate } from "react-router-dom"

function Contact() {
	const [state, dispatch] = useReducer(reducer, initialState)
	const navigate = useNavigate()

	const {
		email,
		errorEmail,
		emailToggle,

		tel,
		errorTel,
		telToggle,

		message,
		errorMessage,
		messageToggle,

		success,
	} = state

	const send = e => {
		e.preventDefault()
		if (!email) {
			dispatch({ type: "errorEmail", errorEmail: "Musisz podać emaila!" })
		} else if (!reg.test(email)) {
			dispatch({ type: "errorEmail", errorEmail: "Email niepoprawny!" })
		} else {
			dispatch({ type: "errorEmail", errorEmail: "" })
			dispatch({ type: "emailToggle", emailToggle: true })
		}

		if (!tel) {
			dispatch({ type: "errorTel", errorTel: "Musisz podać telefon!" })
		} else if (!pattern.test(tel)) {
			dispatch({
				type: "errorTel",
				errorTel: 'Zła wartość! Podaj 9 cyfr bez spacji i " - "!',
			})
		} else {
			dispatch({ type: "errorTel", errorTel: "" })
			dispatch({ type: "telToggle", telToggle: true })
		}

		if (message.length < 5) {
			dispatch({ type: "errorMessage", errorMessage: "Musisz podać min 5 znaków!" })
		} else {
			dispatch({ type: "errorMessage", errorMessage: "" })
			dispatch({ type: "messageToggle", messageToggle: true })
		}
	}

	useEffect(() => {
		if (emailToggle && telToggle && messageToggle) {
			dispatch({ type: "success", success: true })
		}
	}, [emailToggle, telToggle, messageToggle])

	if (success) {
		return (
			<div>
				<h1 className='title-section'>Kontakt</h1>
				<p className='form-success'>
					Wiadomość wysłana poprawnie! Niebawem się odezwiemy.
				</p>
			</div>
		)
	} else {
		return (
			<div>
				<h1 className='title-section'>Kontakt</h1>
				<form className='box-form-contact' action=''>
					<div className='box-contact-email-tel'>
						<div>
							<label htmlFor='email'>Email</label>
							<input
								className='form-input form-input-email'
								type='email'
								id='email'
								value={email}
								required
								onChange={e => dispatch({ type: "email", email: e.target.value })}
							/>
							{!errorEmail || <p className='form-error'>{errorEmail}</p>}
						</div>
						<div>
							<label htmlFor='tel'>Telefon</label>
							<input
								className='form-input form-input-tel'
								type='tel'
								it='tel'
								required
								value={tel}
								onChange={e => dispatch({ type: "tel", tel: e.target.value })}
							/>
							{!errorTel || <p className='form-error'>{errorTel}</p>}
						</div>
					</div>
					<label htmlFor='message'>Wiadomość</label>
					<textarea
						className='form-textarea'
						id='message'
						value={message}
						type='textarea'
						onChange={e => dispatch({ type: "message", message: e.target.value })}
						rows='10'
						required
					></textarea>
					{!errorMessage || <p className='form-error'>{errorMessage}</p>}
					<input className='btn-form' onClick={send} type='submit' value='Wyślij' />
					<div></div>
				</form>
			</div>
		)
	}
}

export default Contact
