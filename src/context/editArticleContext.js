import React from "react"

const EditArticleContext = React.createContext({
	showPopUpEdit: false,
	idArticleEdit: null,
	showPopUpEditFunction: () => {},
})

EditArticleContext.displayName = "EditArticleContext"

export default EditArticleContext
