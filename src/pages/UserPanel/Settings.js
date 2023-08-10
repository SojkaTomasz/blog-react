import { useContext } from "react"
import LoginContext from "../../context/loginContext"
import Preloader from "../../UI/Preloader"
import ChangeEmail from "../../components/UserPanel/Settings/ChangeEmail"
import ChangePassword from "../../components/UserPanel/Settings/ChangePassword"
import DeleteAccount from "../../components/UserPanel/Settings/DeleteAccount"
import AddPhoto from "../../components/UserPanel/Settings/AddPhoto"

function Settings() {
	const loginContext = useContext(LoginContext)

	if (!loginContext.dataUser) {
		return <Preloader />
	} else {
		return (
			<div>
				<ChangeEmail />
				<ChangePassword />
				<AddPhoto />
				<DeleteAccount />
			</div>
		)
	}
}

export default Settings
