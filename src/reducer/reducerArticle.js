export const initialState = {
	dataAddArticle: {
		author: "",
		title: "",
		description: "",
		image: null,
		datePublication: new Date().toJSON(),
	},

	dataEditArticle: {},

	imageEditArticle: "",

	errorTitle: "",
	toggleTitle: false,

	errorImage: "",
	toggleImage: false,

	errorDescription: "",
	toggleDescription: false,

	toggleCheckbox: false,
}

export const reducer = (state, action) => {
	switch (action.type) {
		case "dataAddArticle":
			return { ...state, dataAddArticle: action.dataAddArticle }

		case "dataEditArticle":
			return { ...state, dataEditArticle: action.dataEditArticle }

		case "imageEditArticle":
			return { ...state, imageEditArticle: action.imageEditArticle }

		case "errorTitle":
			return { ...state, errorTitle: action.errorTitle }
		case "toggleTitle":
			return { ...state, toggleTitle: action.toggleTitle }

		case "errorImage":
			return { ...state, errorImage: action.errorImage }
		case "toggleImage":
			return { ...state, toggleImage: action.toggleImage }

		case "errorDescription":
			return { ...state, errorDescription: action.errorDescription }
		case "toggleDescription":
			return { ...state, toggleDescription: action.toggleDescription }

		case "toggleCheckbox":
			return { ...state, toggleCheckbox: action.toggleCheckbox }

		default:
			throw new Error(action.type)
	}
}
