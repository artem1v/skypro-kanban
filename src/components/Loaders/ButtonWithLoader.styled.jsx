import styled, { keyframes } from 'styled-components'

export const Button = styled.button`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px 14px;
	font-size: 14px;
	border-radius: 4px;
	cursor: pointer;
	min-height: 36px;
	transition: background-color 0.3s;
	white-space: nowrap;

	background-color: ${({ $variant, theme }) =>
		$variant === 'primary'
			? theme.colors.buttonPrimary
			: theme.colors.buttonSecondary};
	color: ${({ $variant, theme }) =>
		$variant === 'primary' ? theme.colors.buttonText : theme.colors.border};
	border: ${({ $variant, theme }) =>
		$variant === 'primary'
			? `0.70px solid ${theme.colors.buttonPrimary}`
			: `0.70px solid ${theme.colors.border}`};

	&:hover {
		background-color: ${({ $variant, theme }) =>
			$variant === 'primary'
				? theme.colors.buttonPrimary + '90'
				: theme.colors.buttonPrimary};
		color: #fff;
		border: ${({ $variant, theme }) =>
			$variant === 'primary'
				? `0.70px solid ${theme.colors.buttonPrimary + '90'}`
				: `0.70px solid ${theme.colors.buttonPrimary}`};
	}

	.loader-wrapper {
		position: absolute;
		inset: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`

const spin = keyframes`
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
`

export const BtnLoader = styled.div`
	border: 2px solid rgba(255, 255, 255, 0.3);
	border-top: 2px solid white;
	border-radius: 50%;
	width: 16px;
	height: 16px;
	animation: ${spin} 1s linear infinite;
`
