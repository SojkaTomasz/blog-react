export const initialState = {
	state: [],
	searchState: [],
	getData: false,
	currentPage: 1,
	blogsPerPage: 10,
	valueSearch: "",
	sort: "latest",
}

export const reducer = (state, action) => {
	switch (action.type) {
		case "setState":
			return { ...state, state: action.state }
		case "setGetData":
			return { ...state, getData: true }
		case "setCurrentPage":
			return { ...state, currentPage: action.currentPage }
		case "setSearchState":
			return { ...state, searchState: action.searchState }
		case "setBlogsPerPage":
			return { ...state, blogsPerPage: action.blogsPerPage }
		case "setValueSearch":
			return { ...state, valueSearch: action.valueSearch }
		case "setSort":
			return { ...state, sort: action.sort }
		default:
			throw new Error(action.type)
	}
}
