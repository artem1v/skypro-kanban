import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Hover03 } from '../../../styles/GlobalStyles'
import { PopTarget } from '../Popups.styled'

export const SPopUserSet = styled.div`
	display: block;
	position: absolute;
	top: 61px;
	right: 0;
	width: 213px;
	height: 205px;
	border-radius: 10px;
	border: 0.7px solid ${({ theme }) => theme.colors.secondary + '66'};
	background: ${({ theme }) => theme.colors.background};
	box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
	padding: 34px;
	text-align: center;
	z-index: 2;
	${PopTarget}
`

export const SPopUserSetName = styled.p`
	color: ${({ theme }) => theme.colors.text};
	font-size: 14px;
	font-weight: 500;
	line-height: 21px;
	letter-spacing: -0.14px;
	margin-bottom: 4px;
`

export const SPopUserSetMail = styled.p`
	color: ${({ theme }) => theme.colors.secondary};
	font-size: 14px;
	line-height: 21px;
	letter-spacing: -0.14px;
	margin-bottom: 10px;
`

export const SPopUserSetTheme = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 30px;
	p {
		color: ${({ theme }) => theme.colors.text};
		font-size: 14px;
		line-height: 21px;
		letter-spacing: -0.14px;
	}
	input[type='checkbox'] {
		position: relative;
		width: 24px;
		height: 13px;
		border-radius: 100px;
		background: ${({ theme }) => theme.colors.checkbox};
		outline: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
	}
	input[type='checkbox']::before {
		content: '';
		position: absolute;
		top: 1px;
		left: 1px;
		width: 11px;
		height: 11px;
		border-radius: 50%;
		background-color: ${({ theme }) => theme.colors.primary};
		transition: 0.5s;
	}
	input:checked[type='checkbox']::before {
		left: 12px;
	}
`

export const SPopUserSetBtn = styled(Link)`
	width: 72px;
	height: 30px;
	padding: 10px 14px;
	background: transparent;
	color: ${({ theme }) => theme.colors.border};
	border-radius: 4px;
	border: 1px solid ${({ theme }) => theme.colors.border};
	transition: all 0.3s;
	${Hover03}
	a {
		color: ${({ theme }) => theme.colors.primary};
	}
`
