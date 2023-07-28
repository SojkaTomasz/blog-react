export const initialState = {
	email: "",
	errorEmail: "",
	emailToggle: false,

	tel: "",
	errorTel: "",
	telToggle: false,

	message: "",
	errorMessage: "",
	messageToggle: false,

	password: "",
	errorPassword: "",
	passwordToggle: false,

	repeatPassword: "",
	errorRepeatPassword: "",
	repeatPasswordToggle: false,


	error: "",
	errorToggle: false,

	success: false,

}

export const reducer = (state, action) => {
	switch (action.type) {
		case "email":
			return { ...state, email: action.email }
		case "errorEmail":
			return { ...state, errorEmail: action.errorEmail }
		case "emailToggle":
			return { ...state, emailToggle: action.emailToggle }

		case "tel":
			return { ...state, tel: action.tel }
		case "errorTel":
			return { ...state, errorTel: action.errorTel }
		case "telToggle":
			return { ...state, telToggle: true }

		case "message":
			return { ...state, message: action.message }
		case "errorMessage":
			return { ...state, errorMessage: action.errorMessage }
		case "messageToggle":
			return { ...state, messageToggle: true }

		case "password":
			return { ...state, password: action.password }
		case "errorPassword":
			return { ...state, errorPassword: action.errorPassword }
		case "passwordToggle":
			return { ...state, passwordToggle: true }

		case "repeatPassword":
			return { ...state, repeatPassword: action.repeatPassword }
		case "errorRepeatPassword":
			return { ...state, errorRepeatPassword: action.errorRepeatPassword }
		case "repeatPasswordToggle":
			return { ...state, repeatPasswordToggle: true }

			case "error":
			return { ...state, error: action.error }
		case "repeatToggle":
			return { ...state, repeatToggle: true }

		case "success":
			return { ...state, success: action.success }

		default:
			throw new Error(action.type)
	}
}
