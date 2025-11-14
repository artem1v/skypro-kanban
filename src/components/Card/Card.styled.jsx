import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const Ccard = styled.div`
	width: 220px;
	height: 130px;
	background-color: ${({ theme }) => theme.colors.cardBg};
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: stretch;
	padding: 15px 13px 19px;
`

export const Cgroup = styled.div`
	width: 100%;
	height: 20px;
	margin-bottom: 12px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const Cbtn = styled(Link)`
	cursor: pointer;
	width: 24px;
	height: 24px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 2px;
	div {
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background-color: ${({ theme }) => theme.colors.secondary};
	}
`

export const Ccontent = styled.div`
	height: 64px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
`

export const Ctitle = styled.h3`
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
	color: ${({ theme }) => theme.colors.text};
	margin-bottom: 10px;
`

export const Cdate = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	svg {
		width: 13px;
	}
	p {
		margin-left: 6px;
		font-size: 10px;
		line-height: 13px;
		color: ${({ theme }) => theme.colors.secondary};
		letter-spacing: 0.2px;
	}
`

const themeStyles = {
	default: css`
		background-color: ${({ theme }) => theme.colors.secondary};
		color: ${({ theme }) => theme.colors.buttonText};
	`,
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
	gray: css`
		background-color: ${({ theme }) => theme.colors.secondary};
		color: ${({ theme }) => theme.colors.background};
	`,
}

export const Ctheme = styled.div`
	width: auto;
	height: 20px;
	padding: 5px 14px;
	border-radius: 18px;
	${props => themeStyles[props.$colorTheme] || themeStyles.default}
`

export const CthemeText = styled.p`
	font-size: 10px;
	font-weight: 600;
	line-height: 10px;
	${props => themeStyles[props.$colorTheme] || themeStyles.default}
`
