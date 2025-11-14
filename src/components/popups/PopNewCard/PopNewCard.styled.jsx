import styled, { css, keyframes } from 'styled-components'
import { Hover01, SubTtl } from '../../../styles/GlobalStyles'

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const scaleIn = keyframes`
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`

const categoryStyles = {
	orange: css`
		background-color: ${({ theme }) => theme.colors.orangeBg};
		color: ${({ theme }) => theme.colors.orangeText};
	`,
	green: css`
		background-color: ${({ theme }) => theme.colors.greenBg};
		color: ${({ theme }) => theme.colors.greenText};
	`,
	purple: css`
		background-color: ${({ theme }) => theme.colors.purpleBg};
		color: ${({ theme }) => theme.colors.purpleText};
	`,
	default: css`
		background-color: ${({ theme }) => theme.colors.secondary};
		color: ${({ theme }) => theme.colors.buttonText};
	`,
}

export const PopNewCard = styled.div`
	display: block;
	width: 100%;
	min-width: 375px;
	height: 100%;
	min-height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 6;
	animation: ${fadeIn} 0.3s ease-in;
`

export const PopNewCardContainer = styled.div`
	width: 100%;
	height: 100%;
	padding: 0 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(0, 0, 0, 0.4);

	@media (max-width: 768px) {
		padding: 0;
	}
`

export const PopNewCardBlock = styled.div`
	background-color: ${({ theme }) => theme.colors.cardBg};
	max-width: 630px;
	width: 100%;
	padding: 24px;
	border-radius: 10px;
	border: 0.7px solid ${({ theme }) => theme.colors.borderCard};
	position: relative;
	animation: ${scaleIn} 0.3s ease-out;

	@media (max-width: 768px) {
		padding: 16px;
	}
`

export const PopNewCardContent = styled.div`
	display: block;
	text-align: left;
`

export const PopNewCardTtl = styled.div`
	color: ${({ theme }) => theme.colors.text};
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 20px;
`

export const PopNewCardClose = styled.div`
	position: absolute;
	top: 20px;
	right: 20px;
	color: ${({ theme }) => theme.colors.secondary};
	cursor: pointer;
	font-size: 20px;
	&:hover {
		color: ${({ theme }) => theme.colors.text};
	}
`

export const PopNewCardWrap = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	gap: 20px;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`

export const PopNewCardForm = styled.form`
	max-width: 370px;
	width: 100%;
	display: block;
	margin-bottom: 20px;
`

export const FormNewBlock = styled.div`
	display: flex;
	flex-direction: column;
`

export const FormNewLabel = styled.label`
	${SubTtl}
	margin-bottom: 14px;
`

export const FormNewInput = styled.input`
	width: 100%;
	outline: none;
	padding: 14px;
	border-radius: 8px;
	font-size: 14px;
	margin-bottom: ${({ $error }) => ($error ? '#0px' : '20px')};
	background-color: ${({ theme }) => theme.colors.cardBg};
	color: ${({ theme }) => theme.colors.text};
	border: 1px solid
		${({ $error }) => ($error ? '#e74c3c' : 'rgba(148, 166, 190, 0.4)')};

	&::placeholder {
		color: ${({ theme }) => theme.colors.secondary};
	}
`

export const FormNewArea = styled.textarea`
	${FormNewInput}
	height: 200px;
	padding: 14px;
	border: 0.7px solid rgba(148, 166, 190, 0.4);
	border-radius: 8px;
	resize: vertical;
	min-height: 200px;
	margin-bottom: ${({ $error }) => ($error ? '#0px' : '20px')};
	background-color: ${({ theme }) => theme.colors.cardBg};
	color: ${({ theme }) => theme.colors.text};
	border: 1px solid
		${({ $error }) => ($error ? '#e74c3c' : 'rgba(148, 166, 190, 0.4)')};
	&::placeholder {
		color: ${({ theme }) => theme.colors.secondary};
	}
`

export const PopNewCardSubmit = styled.div`
	display: flex;
	justify-content: end;

	@media (max-width: 768px) {
		justify-content: start;
	}
`

export const FormNewCreate = styled.button`
	width: 132px;
	height: 30px;
	background-color: ${({ theme }) => theme.colors.primary};
	border-radius: 4px;
	border: none;
	font-size: 14px;
	font-weight: 500;
	color: ${({ theme }) => theme.colors.buttonText};
	cursor: pointer;
	transition: all 0.3s;
	${Hover01}

	@media (max-width: 768px) {
		justify-content: start;
	}
`

export const Categories = styled.div`
	margin-bottom: 20px;
`

export const CategoriesThemes = styled.div`
	display: flex;
	flex-wrap: nowrap;
	align-items: flex-start;
	justify-content: flex-start;
`

export const CategoriesP = styled.p`
	${SubTtl}
	margin-bottom: 14px;
`

export const CategoryTheme = styled.div`
	display: inline-block;
	height: 30px;
	padding: 8px 20px;
	border-radius: 24px;
	cursor: pointer;
	margin-right: 7px;
	opacity: ${props => (props.$isActive ? 1 : 0.4)};
	${props => categoryStyles[props.color] || categoryStyles.default}
`

export const CategoryText = styled.p`
	font-size: 14px;
	font-weight: 600;
	white-space: nowrap;
`

export const ErrorText = styled.p`
	text-align: end;
	color: #e74c3c;
	font-size: 13px;
	margin-top: 4px;
`
