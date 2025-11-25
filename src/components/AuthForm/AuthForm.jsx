import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { signIn, signUp } from '../../services/auth'
import ButtonWithLoader from '../Loaders/ButtonWithLoader'
import {
	AuthFormContainer,
	AuthFormForm,
	AuthFormModal,
	AuthFormTitle,
	AuthFormWrapper,
	FormButton,
	FormGroup,
	FormInput,
	FormInputWrapper,
	FormLink,
	FormText,
} from './AuthForm.styled'

const AuthForm = ({ isSignUp }) => {
	const navigate = useNavigate()
	const { updateUserInfo } = useContext(AuthContext)

	const [loading, setLoading] = useState(false)
	const [isSubmitted, setIsSubmitted] = useState(false)

	const [formData, setFormData] = useState({
		name: '',
		login: '',
		password: '',
	})

	const [errors, setErrors] = useState({
		name: false,
		login: false,
		password: false,
	})

	const [error, setError] = useState('')

	const validateForm = (data = formData) => {
		const newErrors = { name: false, login: false, password: false }
		let isValid = true

		if (isSignUp && !data.name.trim()) {
			newErrors.name = true
			isValid = false
		}
		if (!data.login.trim()) {
			newErrors.login = true
			isValid = false
		}
		if (!data.password.trim()) {
			newErrors.password = true
			isValid = false
		}

		setErrors(newErrors)
		if (!isValid) setError('Заполните все поля')
		else setError('')
		return isValid
	}

	const handleChange = e => {
		const { name, value } = e.target
		const newFormData = { ...formData, [name]: value }
		setFormData(newFormData)
		if (isSubmitted) {
			validateForm(newFormData)
		}
	}

	const handleSubmit = async e => {
		e.preventDefault()
		setIsSubmitted(true)
		if (!validateForm()) return

		setLoading(true)
		try {
			const data = !isSignUp
				? await signIn({ login: formData.login, password: formData.password })
				: await signUp(formData)

			if (data) {
				updateUserInfo(data)
				navigate('/')
			}
		} catch (err) {
			setError(err.message)
		} finally {
			setLoading(false)
		}
	}

	const isFormValid =
		(isSignUp ? formData.name.trim() : true) &&
		formData.login.trim() &&
		formData.password.trim()

	return (
		<AuthFormContainer>
			<AuthFormModal>
				<AuthFormWrapper>
					<AuthFormTitle>{isSignUp ? 'Регистрация' : 'Вход'}</AuthFormTitle>
					<AuthFormForm onSubmit={handleSubmit}>
						<FormInputWrapper>
							{isSignUp && (
								<FormInput
									type='text'
									name='name'
									placeholder='Имя'
									value={formData.name}
									onChange={handleChange}
									$error={errors.name}
								/>
							)}
							<FormInput
								type='text'
								name='login'
								placeholder='Эл. почта'
								value={formData.login}
								onChange={handleChange}
								$error={errors.login}
							/>
							<FormInput
								type='password'
								name='password'
								placeholder='Пароль'
								value={formData.password}
								onChange={handleChange}
								$error={errors.password}
							/>
						</FormInputWrapper>
						<p style={{ color: 'red', minHeight: '18px' }}>{error}</p>
						<ButtonWithLoader
							as={FormButton}
							type='submit'
							loading={loading}
							disabled={!isFormValid || loading}
						>
							{isSignUp ? 'Зарегистрироваться' : 'Войти'}
						</ButtonWithLoader>

						{!isSignUp && (
							<FormGroup>
								<FormText>Нужно зарегистрироваться?</FormText>
								<FormLink to='/sign-up'>Регистрируйтесь здесь</FormLink>
							</FormGroup>
						)}
						{isSignUp && (
							<FormGroup>
								<FormText>
									Есть аккаунт? <FormLink to='/sign-in'>Войдите здесь</FormLink>
								</FormText>
							</FormGroup>
						)}
					</AuthFormForm>
				</AuthFormWrapper>
			</AuthFormModal>
		</AuthFormContainer>
	)
}

export default AuthForm
