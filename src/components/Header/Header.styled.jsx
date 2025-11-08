import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Hover01, Hover02 } from '../../styles/GlobalStyles'

export const Sheader = styled.header`
	width: 100%;
	margin: 0 auto;
	background-color: ${({ theme }) => theme.colors.cardBg};
`
export const Hblock = styled.div`
	height: 70px;
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
	top: 0;
	left: 0;
	padding: 0 10px;
`
export const Hnav = styled.nav`
	max-width: 290px;
	position: relative;
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Huser = styled.a`
	height: 20px;
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: center;
	user-select: none;
	font-size: 14px;
	line-height: 20px;
	color: ${({ theme }) => theme.colors.border};
	${Hover02}
	&::after {
		content: '';
		display: block;
		width: 6px;
		height: 6px;
		border-radius: 1px;
		border-left: 1.9px solid ${({ theme }) => theme.colors.border};
		border-bottom: 1.9px solid ${({ theme }) => theme.colors.border};
		transform: rotate(-45deg);
		margin: -6px 0 0 5px;
		padding: 0;
	}
`

export const Hbtn = styled(Link)`
	max-width: 178px;
	text-align: center;
	padding: 10px 14px;
	border-radius: 4px;
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.buttonText};
	border: none;
	font-size: 14px;
	font-weight: 500;
	margin-right: 20px;
	transition: all 0.3s;
	${Hover01}

	@media (max-width: 768px) {
		display: none;
	}
`

export const HbtnMobile = styled(Link)`
	display: none;

	@media (max-width: 768px) {
		display: block;
		position: fixed;
		bottom: 30px;
		left: 0;
		width: 90%;
		margin: 0 16px;
		padding: 16px;
		background: ${({ theme }) => theme.colors.primary};
		color: ${({ theme }) => theme.colors.buttonText};
		text-align: center;
		text-decoration: none;
		font-size: 16px;
		font-weight: 600;
		z-index: 100;
		box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
		border-radius: 4px;
		max-width: 420px;
	}
`

export const Hlogo = styled.div`
	display: flex;
	align-items: center;

	a {
		display: block;
	}

	img {
		height: 36px;
		width: auto;
		object-fit: contain;
		@media (max-width: 480px) {
			height: 30px;
			max-width: 85px;
		}
	}
`
