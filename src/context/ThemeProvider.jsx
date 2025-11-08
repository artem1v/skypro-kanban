import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../themes'
import { ThemeContext } from './ThemeContext'

export const ThemeProviderCustom = ({ children }) => {
	const [themeName, setThemeName] = useState('light')

	useEffect(() => {
		const storedTheme = localStorage.getItem('app-theme')

		if (storedTheme) {
			setThemeName(storedTheme)
		} else {
			const prefersDark = window.matchMedia(
				'(prefers-color-scheme: dark)'
			).matches
			const systemTheme = prefersDark ? 'dark' : 'light'
			setThemeName(systemTheme)
			localStorage.setItem('app-theme', systemTheme)
		}
	}, [])

	const toggleTheme = () => {
		const newTheme = themeName === 'light' ? 'dark' : 'light'
		setThemeName(newTheme)
		localStorage.setItem('app-theme', newTheme)
	}

	const themeObject = themeName === 'light' ? lightTheme : darkTheme

	return (
		<ThemeContext.Provider value={{ themeName, toggleTheme }}>
			<ThemeProvider theme={themeObject}>{children}</ThemeProvider>
		</ThemeContext.Provider>
	)
}
