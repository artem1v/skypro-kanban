import { createGlobalStyle, css } from 'styled-components'

export const Hover01 = css`
	&:hover {
		background-color: ${({ theme }) => theme.colors.primary + '90'};
		color: ${({ theme }) => theme.colors.buttonText};
	}
`

export const Hover02 = css`
	&:hover {
		color: ${({ theme }) => theme.colors.border};
		background-color: ${({ theme }) => theme.colors.cardBg};
	}
	&:hover::after {
		border-left-color: ${({ theme }) => theme.colors.border};
		border-bottom-color: ${({ theme }) => theme.colors.border};
	}
`

export const Hover03 = css`
	&:hover {
		background-color: ${({ theme }) => theme.colors.primary};
		border: ${({ theme }) => theme.colors.border};
		color: ${({ theme }) => theme.colors.buttonText};
		a {
			color: ${({ theme }) => theme.colors.background};
		}
	}
`

export const SubTtl = css`
	color: ${({ theme }) => theme.colors.text};
	font-size: 14px;
	font-weight: 600;
	line-height: 1;
`

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
  }

  ul li {
    list-style: none;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }

  textarea {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
  }

  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: background-color 0.3s ease, color 0.3s ease;
  
  .custom-toast {
    background: transparent !important;
    box-shadow: none !important;
    padding: 0 !important;
  }
`
