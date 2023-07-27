import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

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

	return <h2>NIE MA TAKIEJ STRONY! Wrócisz do strony głównej za {time}s</h2>
}

export default ErrorPage
