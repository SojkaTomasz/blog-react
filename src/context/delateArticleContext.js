import React from "react"

const DelateArticleContext = React.createContext({
	showPopUpDelete: false,
	idArticleDelate: "",
	showPopUpFunction: () => {},
})

DelateArticleContext.displayName = "DelateArticleContext"

export default DelateArticleContext
