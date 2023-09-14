import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import errorPage from "../images/error-page.jpg"

function ErrorPage() {
	const navigate = useNavigate()
	const [time, setTime] = useState(5)

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(time => time - 1)
		}, 1000)
		if (time === 0) {
			navigate("/")
		}
		return () => clearInterval(interval)
	}, [time])

	return (
		<div style={{ textAlign: "center" }}>
			<div style={{ maxWidth: "400px", margin: "auto" }}>
				<img style={{ width: "100%" }} src={errorPage} alt='' />
			</div>
			<h2>
				NIE MA TAKIEJ STRONY! <br />
				Wrócisz do strony głównej za {time}s
			</h2>
		</div>
	)
}

export default ErrorPage
