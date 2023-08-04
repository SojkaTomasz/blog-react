import { useContext } from "react"
import LoginContext from "../../context/loginContext"
import Preloader from "../../UI/Preloader"
import ChangeEmail from "../../components/UserPanel/Settings/ChangeEmail"
import ChangePassword from "../../components/UserPanel/Settings/ChangePassword"

function Settings() {
	const loginContext = useContext(LoginContext)

	if (!loginContext.dataUser) {
		return <Preloader />
	} else {
		return (
			<div>
				<ChangeEmail />
				<ChangePassword />
			</div>
		)
	}
}

export default Settings
