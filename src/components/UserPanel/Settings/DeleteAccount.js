import { useContext, useState } from "react"
import LoginContext from "../../../context/loginContext"
import { firebaseConfig } from "../../../firebase"
import axios from "axios"

const HTTPS_URL = `https://identitytoolkit.googleapis.com/v1/accounts:delete?key=${firebaseConfig.apiKey}`

function DeleteAccount() {
	const loginContext = useContext(LoginContext)
	const [info, setInfo] = useState(``)
	const [toggleBtn, setToggleBtn] = useState(false)

	const acceptAccountDeletion = async () => {
		if (loginContext.dataUser.localId === "nPX6h1SzE4TYXh7kktlB489Apzv2") {
			setInfo(`TO KONTO NIE MOŻNA KASOWAĆ!`)
		} else {
			await axios.post(HTTPS_URL, { idToken: loginContext.dataUser.idToken })
			setInfo(`Przykro nam że odchodzisz !
      zachwilę zostaniesz wylogowany`)
			setTimeout(() => {
				loginContext.logout()
			}, 3000)
		}
	}

	const clickDeleteAccount = () => {
		setToggleBtn(!toggleBtn)
		setInfo("CZY JESTEŚ PEWIEN ?!")
	}

	return (
		<div>
			{!toggleBtn ? (
				<button
					className='btn-form btn-settings btn-delete'
					onClick={clickDeleteAccount}
				>
					Usuń Konto
				</button>
			) : (
				<div className="active-change-settings-user-data">
					<p className='form-error error-settings'>{info}</p>
					<button
						className='btn-form btn-settings btn-delete'
						onClick={clickDeleteAccount}
					>
						Nie usuwaj
					</button>
					<button
						className='btn-form btn-settings btn-delete'
						onClick={acceptAccountDeletion}
					>
						Tak usuń
					</button>
				</div>
			)}
		</div>
	)
}

export default DeleteAccount
