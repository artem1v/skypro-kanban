import styled from 'styled-components'
import { Hover01, Hover03 } from '../../styles/GlobalStyles'

export const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 15;
`

export const ModalContainer = styled.div`
	background: ${({ theme }) => theme.colors.background};
	padding: 50px 30px;
	border: 0.7px solid ${({ theme }) => theme.colors.secondary};
	border-radius: 10px;
	text-align: center;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	max-width: 370px;
`

export const QuestionText = styled.p`
	font-size: 20px;
	font-weight: 700;
	color: ${({ theme }) => theme.colors.text};
	margin-bottom: 20px;
`

export const ModalBlock = styled.div`
	display: flex;
	gap: 7px;
`

export const ModalButton = styled.button`
	width: 153px;
	padding: 8px 10px;
	border: 0.7px solid #4e5566;
	border-radius: 4px;
	font-weight: 500;
	letter-spacing: -0.01em;
	line-height: 150%;
	font-size: 14px;
	text-align: center;
	cursor: pointer;
	transition: background-color 0.3s;

	&:first-child {
		background-color: ${({ theme }) => theme.colors.primary};
		color: ${({ theme }) => theme.colors.buttonText};
		${Hover01}
	}

	&:last-child {
		color: ${({ theme }) => theme.colors.border};
		background: transparent;
		${Hover03}
	}
`
