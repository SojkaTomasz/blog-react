import { useEffect, useLayoutEffect, useState } from "react"
import imgB1 from "../images/imgB1.jpg"
import imgB2 from "../images/imgB2.jpg"
import imgB3 from "../images/imgB3.jpg"
import imgB4 from "../images/imgB4.jpg"
import imgS1 from "../images/imgS1.jpg"
import imgS2 from "../images/imgS2.jpg"
import imgS3 from "../images/imgS3.jpg"
import imgS4 from "../images/imgS4.jpg"
import "../styles/header.css"

const headerImgSmall = [imgS1, imgS2, imgS3, imgS4]
const headerImgBig = [imgB1, imgB2, imgB3, imgB4]
const quotations = [
	'"Dwa najważniejsze dni w Twoim życiu to dzień, w którym się urodziłeś, i dzień, w którym dowiedziałeś się, dlaczego." - Mark Twain',
	'"Człowiek, który nie czyta, żyje tylko jedno życie. Człowiek, który czyta, żyje tysiące żyć." - George R.R. Martin',
	'"Prawdziwe życie to wewnętrzna podróż. Powinieneś zawsze starać się być lepszym człowiekiem." - Muhammad Ali',
	'"Bądź zmianą, którą chcesz widzieć w świecie." - Mahatma Gandhi',
	'"Największym ryzykiem jest nie podjęcie ryzyka. W prawdziwym życiu ryzyko nie polega na tym, że robisz coś, co jest ryzykowne, ale na tym, że nie robisz niczego." - Oprah Winfrey',
	'"Prawdziwa przyjaźń zaczyna się wtedy, gdy milczenie między dwiema osobami jest komfortowe." - David Tyson',
	'"Błędy są naszymi nauczycielami; nie są porażkami. " - Zig Ziglar',
	'"Nie możemy rozwiązywać naszych problemów myśleniem na tym samym poziomie, na jakim je stworzyliśmy." - Albert Einstein',
	'"Najtrudniejszym przeciwnikiem, z jakim kiedykolwiek się zmierzysz, jesteś Ty sam." - Maxwell Maltz',
	'"Nie można uniknąć tego, co nazywane jest życiem, ale nigdy nie można rzucić życia na pastwę losu. Musisz wybrać. Żyj, albo umieraj." - Stephen King',
]

function Header() {
	const [img, setImg] = useState()
	const [text, setText] = useState()
	const [numberImg, setNumberImg] = useState(0)
	const [numberText, setNumberText] = useState(0)
	const time = 3000

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
