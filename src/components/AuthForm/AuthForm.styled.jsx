import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Hover01 } from '../../styles/GlobalStyles'

export const AuthFormContainer = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: ${({ theme }) => theme.colors.tertiary};
	padding: 40px 16px;
	box-sizing: border-box;

	@media (max-width: 480px) {
		padding: 0;
	}
`

export const AuthFormModal = styled.div`
	width: 100%;
	max-width: 368px;
	border: 1px solid ${({ theme }) => theme.colors.secondary};
	border-radius: 10px;
	padding: 32px 24px;
	box-shadow: 0 4px 67px -12px rgba(0, 0, 0, 0.13);
	background: ${({ theme }) => theme.colors.background};
	box-sizing: border-box;

	@media (max-width: 480px) {
		border: none;
	}
`

export const AuthFormWrapper = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	gap: 20px;
`

export const AuthFormTitle = styled.h2`
	font-weight: 700;
	font-size: 20px;
	line-height: 150%;
	text-align: center;
	color: ${({ theme }) => theme.colors.text};
`

export const AuthFormForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
	align-items: center;
`

export const FormInputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	width: 100%;
`

export const FormInput = styled.input`
	border: 1px solid
		${({ $error, theme }) => ($error ? 'red' : theme.colors.secondary + '66')};
	border-radius: 8px;
	padding: 10px;
	width: 100%;
	max-width: 250px;
	font-size: 14px;
	color: ${({ theme }) => theme.colors.text};
	background-color: ${({ theme }) => theme.colors.background};

	&::placeholder {
		color: ${({ theme }) => theme.colors.secondary};
	}

	@media (max-width: 480px) {
		max-width: 100%;
	}
`

export const FormButton = styled.button`
	width: 100%;
	max-width: 272px;
	padding: 10px;
	border-radius: 4px;
	background: ${({ disabled, theme }) =>
		disabled ? theme.colors.secondary + '66' : theme.colors.primary};
	color: ${({ theme }) => theme.colors.buttonText};
	font-weight: 500;
	font-size: 14px;
	cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
	${Hover01}

	@media (max-width: 480px) {
		max-width: 100%;
	}
`

export const FormGroup = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4px;
`

export const FormText = styled.p`
	margin: 0;
	font-size: 14px;
	text-align: center;
	color: ${({ theme }) => theme.colors.secondary + '66'};
`

export const FormLink = styled(Link)`
	font-size: 14px;
	text-align: center;
	color: ${({ theme }) => theme.colors.secondary + '66'};
	text-decoration: underline;
`
