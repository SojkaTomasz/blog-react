import { useEffect, useState } from "react"
import "./styles/pagination.css"

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
			<a
				href='#pagination'
				onClick={() => props.click(1, "-")}
				className={`btn-pagination ${!isActiveBack || "btn-pagination-disabled"}`}
			>
				Wstecz
			</a>
			<p>
				{props.fromPage} - {props.toPage} / {props.lengthPage}
			</p>
			<a
				href='#pagination'
				onClick={() => props.click(1, "+")}
				className={`btn-pagination ${!isActiveForward || "btn-pagination-disabled"}`}
			>
				Wstecz
			</a>
		</div>
	)
}

export default Pagination
