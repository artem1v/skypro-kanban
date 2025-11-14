import { useContext } from 'react'
import LogOut from '../components/LogOut/LogOut'
import { AuthContext } from '../context/AuthContext'

const LogOutPage = () => {
	const { updateUserInfo } = useContext(AuthContext)
	return <LogOut updateUserInfo={updateUserInfo} />
}

export default LogOutPage
