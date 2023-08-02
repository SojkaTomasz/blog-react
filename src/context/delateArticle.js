import React from "react"

const DelateArticle = React.createContext({
	showPopUp: false,
	acceptDelate: false,
	idArticleDelate: '',
	showPopUpFunction: () => {},
	acceptFunction: () => {},
})

DelateArticle.displayName = "DelateArticle"

export default DelateArticle
