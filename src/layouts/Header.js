import { useEffect, useLayoutEffect, useState } from "react"
import { headerImgSmall, headerImgBig, quotations } from "../data/headerData"
import "../styles/header.css"

function Header() {
	const [img, setImg] = useState()
	const [text, setText] = useState()
	const [numberImg, setNumberImg] = useState(0)
	const [numberText, setNumberText] = useState(0)
	const time = 5000

	useLayoutEffect(() => {
		if (window.innerWidth > 992) {
			const interval = setInterval(() => {
				if (headerImgBig.length - 1 > numberImg) {
					setNumberImg(numberImg + 1)
				} else {
					setNumberImg(0)
				}
			}, time)
			setImg(headerImgBig[numberImg])
			return () => clearInterval(interval)
		} else {
			const interval = setInterval(() => {
				if (headerImgSmall.length - 1 > numberImg) {
					setNumberImg(numberImg + 1)
				} else {
					setNumberImg(0)
				}
			}, time)
			setImg(headerImgSmall[numberImg])
			return () => clearInterval(interval)
		}
	}, [numberImg, img])

	useEffect(() => {
		const interval = setInterval(() => {
			if (quotations.length - 1 > numberText) {
				setNumberText(numberText + 1)
			} else {
				setNumberText(0)
			}
		}, time)
		setText(quotations[numberText])
		return () => clearInterval(interval)
	}, [numberText, text])

	const style = {
		backgroundImage: `url(${img})`,
	}
	return (
		<div style={style} className='header-image'>
			<p className='text-header'>
				<em>{text}</em>
			</p>
		</div>
	)
}

export default Header
