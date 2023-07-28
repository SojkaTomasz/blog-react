import axios from "axios"

const instance = axios.create({
	baseURL: "https://blog-react-e98a9-default-rtdb.firebaseio.com",
})

export default instance