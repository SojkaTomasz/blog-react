import { useEffect, useState } from "react"
import "./pagination.css"

function Pagination(props) {
	const [isActiveForward, setIsActiveForward] = useState(false)
	const [isActiveBack, setIsActiveBack] = useState(false)

	useEffect(() => {
		if (props.fromPage === 0) {
			setIsActiveBack(true)
		} else {
			setIsActiveBack(false)
		}
		if (props.lengthPage <= props.toPage) {
			setIsActiveForward(true)
		} else {
			setIsActiveForward(false)
		}
	})

	return (
		<div className='box-pagination'>
			<button
				disabled={isActiveBack}
				onClick={() => props.click(1, "-")}
				className={`btn-pagination ${!isActiveBack || "disabled-btn"}`}
			>
				Wstecz
			</button>
			<p>
				{props.fromPage} - {props.toPage} / {props.lengthPage}
			</p>
			<button
				disabled={isActiveForward}
				onClick={() => props.click(1, "+")}
				className={`btn-pagination ${!isActiveForward || "disabled-btn"}`}
			>
				Następna
			</button>
		</div>
	)
}

export default Pagination
