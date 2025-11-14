import { useNavigate } from 'react-router-dom'
import Modal from '../Modal/Modal'
import {
	ModalBlock,
	ModalButton,
	ModalContainer,
	ModalOverlay,
	QuestionText,
} from './LogOut.styled'

const LogOut = ({ updateUserInfo }) => {
	const navigate = useNavigate()

	function handleLogout(e) {
		e.preventDefault()
		updateUserInfo(null)
		navigate('/sign-in')
	}
	function cancelLogout(e) {
		e.preventDefault()
		navigate('/')
	}

	return (
		<Modal>
			<ModalOverlay>
				<ModalContainer>
					<QuestionText>Выйти из аккаунта?</QuestionText>
					<ModalBlock>
						<ModalButton onClick={handleLogout}>Да, выйти</ModalButton>
						<ModalButton onClick={cancelLogout}>Нет, остаться</ModalButton>
					</ModalBlock>
				</ModalContainer>
			</ModalOverlay>
		</Modal>
	)
}

export default LogOut
