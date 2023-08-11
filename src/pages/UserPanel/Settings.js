import { useContext } from "react"
import LoginContext from "../../context/loginContext"
import Preloader from "../../UI/Preloader"
import ChangeEmail from "../../components/UserPanel/Settings/ChangeEmail"
import ChangePassword from "../../components/UserPanel/Settings/ChangePassword"
import DeleteAccount from "../../components/UserPanel/Settings/DeleteAccount"
import InfoUser from "../../components/UserPanel/Settings/InfoUser"
import AddPhoto from "../../components/UserPanel/Settings/AddPhoto"
import "../../styles/settings.css"

function Settings() {
	const loginContext = useContext(LoginContext)

	if (!loginContext.dataUser) {
		return <Preloader />
	} else {
		return (
			<div className='box-user-panel-settings'>
				<div className='box-user-panel-settings-info'>
					<InfoUser />
				</div>
				<div className='box-user-panel-settings-changes'>
					<div>
						<h2>Panel zmian:</h2>
						<ChangeEmail />
						<ChangePassword />
						<AddPhoto />
					</div>
					<DeleteAccount />
				</div>
			</div>
		)
	}
}

export default Settings
