import { useContext } from "react"
import LoginContext from "../../context/loginContext"
import Preloader from "../../UI/Preloader"
import ChangeEmail from "../../components/UserPanel/Settings/ChangeEmail"
import ChangePassword from "../../components/UserPanel/Settings/ChangePassword"
import DeleteAccount from "../../components/UserPanel/Settings/DeleteAccount"

function Settings() {
	const loginContext = useContext(LoginContext)

	if (!loginContext.dataUser) {
		return <Preloader />
	} else {
		return (
			<div>
				<ChangeEmail />
				<ChangePassword />
				<DeleteAccount />
			</div>
		)
	}
}

export default Settings
