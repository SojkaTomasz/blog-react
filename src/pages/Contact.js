import { useEffect, useState } from "react"
import "../styles/form.css"

const reg =
	/^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/

const pattern = /^([0-9]{9})$/

function Contact() {
	const [email, setEmail] = useState("")
	const [tel, setTel] = useState("")
	const [message, setMessage] = useState("")
	const [messageSent, setMessageSent] = useState(false)

	const [emailIsActive, setEmailIsActive] = useState(false)
	const [telIsActive, setTelIsActive] = useState(false)

	const [errorEmail, setErrorEmail] = useState("")
	const [errorTel, setErrorTel] = useState("")
	const [errorMessage, setErrorMessage] = useState("")

	const [messageIsActive, setMessageIsActive] = useState(false)

	const send = e => {
		e.preventDefault()
		if (!email) {
			setErrorEmail("Musisz podać emaila!")
		} else if (!reg.test(email)) {
			setErrorEmail("Email niepoprawny!")
		} else {
			setErrorEmail("")
			setEmailIsActive(true)
		}

		if (!tel) {
			setErrorTel("Musisz podać telefon!")
		} else if (!pattern.test(tel)) {
			setErrorTel('Zła wartość! Podaj 9 cyfr bez spacji i " - "!')
		} else {
			setErrorTel("")
			setTelIsActive(true)
		}

		if (message.length < 5) {
			setErrorMessage("Musisz podać min 5 znaków!")
		} else {
			setErrorMessage("")
			setMessageIsActive(true)
		}
	}

	useEffect(() => {
		if (emailIsActive && telIsActive && messageIsActive) {
			setTimeout(() => {
				setMessageSent(true)
			}, 800)
		}
	}, [emailIsActive, telIsActive, messageIsActive])

	return (
		<div>
			<h1 className='title-section'>Kontakt</h1>
			{messageSent ? (
				<p className='success'>Wiadomość wysłana poprawnie! Niebawem się odezwiemy.</p>
			) : (
				<form className='form-contact' action=''>
					<div className='box-email-tel'>
						<div>
							<label htmlFor='email'>Email</label>
							<input
								className='form-input'
								type='email'
								id='email'
								value={email}
								required
								onChange={e => setEmail(e.target.value)}
							/>
							{!errorEmail || <p className='error'>{errorEmail}</p>}
						</div>
						<div>
							<label htmlFor='tel'>Telefon</label>
							<input
								className='form-input'
								type='tel'
								it='tel'
								required
								value={tel}
								onChange={e => setTel(e.target.value)}
							/>
							{!errorTel || <p className='error'>{errorTel}</p>}
						</div>
					</div>
					<label htmlFor='message'>Wiadomość</label>
					<textarea
						className='form-input'
						id='message'
						value={message}
						type='textarea'
						onChange={e => setMessage(e.target.value)}
						rows='10'
						required
					></textarea>
					{!errorMessage || <p className='error'>{errorMessage}</p>}
					<input className={`submit`} onClick={send} type='submit' value='Wyślij' />
					<div></div>
				</form>
			)}
		</div>
	)
}

export default Contact
