import { useContext } from "react"
import LoginContext from "../../../context/loginContext"
import Preloader from "../../../UI/Preloader"
import user from "../../../images/user.png"

function InfoUser() {
	const loginContext = useContext(LoginContext)
	if (!loginContext.dataUser) {
		return <Preloader />
	} else {
		return (
			<>
				<div>
					{loginContext.dataUser.photoUserUrl ? (
						<img
							style={{ width: 200, borderRadius: "50%" }}
							src={loginContext.dataUser.photoUserUrl}
							alt=''
						/>
					) : (
						<img style={{ width: 200, borderRadius: "50%" }} src={user} alt='' />
					)}
				</div>
				<p>
					Email:
					<strong> {loginContext.dataUser.email}</strong>
				</p>
			</>
		)
	}
}

export default InfoUser
