import styled from 'styled-components'

export const PopBrowse = styled.div`
	position: fixed;
	inset: 0;
	z-index: 50;
	background-color: rgba(0, 0, 0, 0.5);
`

export const PopBrowseContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const PopBrowseBlock = styled.div`
	width: 630px;
	max-height: 90vh;
	overflow-y: auto;
	background-color: ${({ theme }) => theme.colors.cardBg};
	border-radius: 16px;
	box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
	padding: 40px 30px 48px 30px;
`

export const PopBrowseContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 18px;
`

export const PopBrowseTopBlock = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 16px;
`

export const PopBrowseTtl = styled.h2`
	flex-grow: 1;
	font-size: 20px;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.text};
`

export const PopBrowseClose = styled.button`
	background: none;
	border: none;
	font-size: 20px;
	cursor: pointer;
`

export const StatusBlock = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
`

export const StatusTitle = styled.h3`
	font-size: 14px;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.text};
`

export const StatusThemes = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
`

export const PopBrowseWrap = styled.div`
	display: flex;
	gap: 32px;
`

export const PopBrowseForm = styled.form`
	flex: 1;
`

export const BrowseFormBlock = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`

export const BrowseFormLabel = styled.label`
	font-size: 14px;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.text};
`

export const BrowseFormArea = styled.textarea`
	resize: vertical;
	min-height: 200px;
	font-size: 14px;
	padding: 14px;
	border-radius: 8px;
	background-color: ${({ theme, $isEditing }) =>
		$isEditing ? theme.colors.cardBg : theme.colors.tertiary};
	color: ${({ theme }) => theme.colors.text};
	border: ${({ $isEditing, theme }) =>
		$isEditing ? `0.70px solid ${theme.colors.secondary + '60'}` : 'none'};
	:focus {
		outline: none;
	}
`

export const ThemeDownCategories = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
`

export const CategoriesTitle = styled.h3`
	font-size: 18px;
	font-weight: 600;
`

export const ThemeBlock = styled.div`
	padding: 6px 12px;
	border-radius: 20px;
	font-size: 14px;
	background-color: ${({ $themeColor, theme }) => {
		switch ($themeColor) {
			case 'gray':
				return theme.colors.secondary
			case 'orange':
				return theme.colors.orangeBg
			case 'purple':
				return theme.colors.purpleBg
			case 'green':
				return theme.colors.greenBg
			default:
				return 'transparent'
		}
	}};
	color: ${({ $themeColor, theme }) => {
		switch ($themeColor) {
			case 'gray':
				return theme.colors.tertiary
			case 'orange':
				return theme.colors.orangeText
			case 'purple':
				return theme.colors.purpleText
			case 'green':
				return theme.colors.greenText
			default:
				return theme.colors.secondary
		}
	}};
	border: ${({ $themeColor, theme }) => {
		switch ($themeColor) {
			case 'gray':
				return `0.7px solid ${theme.colors.secondary}`
			case 'orange':
			case 'purple':
			case 'green':
				return 'none'
			default:
				return `0.7px solid ${theme.colors.secondary}`
		}
	}};
	cursor: pointer;
	opacity: ${({ $isActive }) => ($isActive ? 1 : 0.6)};
	transition: 0.2s;
`

export const BtnBlock = styled.div`
	display: ${({ $isVisible }) => ($isVisible ? 'flex' : 'none')};
	justify-content: space-between;
`

export const BtnGroup = styled.div`
	display: flex;
	gap: 12px;
`

export const Button = styled.button`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px 14px;
	font-size: 14px;
	border-radius: 4px;
	cursor: pointer;
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
	transition: background-color 0.3s;

	&:hover {
		background-color: ${({ $variant, theme }) =>
			$variant === 'primary'
				? theme.colors.buttonPrimary + '90'
				: theme.colors.buttonPrimary};
		color: ${({ $variant }) => ($variant === 'primary' ? '#fff' : '#fff')};
		border: ${({ $variant, theme }) =>
			$variant === 'primary'
				? `0.70px solid ${theme.colors.buttonPrimary + '90'}`
				: `0.70px solid ${theme.colors.buttonPrimary}`};
		transition: background-color 0.3s;
		min-height: 30px;
	}
`

export const LoadingMessage = styled.div`
	padding: 40px;
	text-align: center;
	font-size: 16px;
	color: ${({ theme }) => theme.colors.secondary};
	font-style: italic;
`

export const ErrorMessage = styled.div`
	padding: 40px;
	text-align: center;
	font-size: 16px;
	color: red;
	font-weight: bold;
`
