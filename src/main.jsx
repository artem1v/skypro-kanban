import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { ThemeProviderCustom } from './context/ThemeProvider.jsx'
import { GlobalStyles } from './styles/GlobalStyles.jsx'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<ThemeProviderCustom>
				<GlobalStyles />
				<App />
			</ThemeProviderCustom>
		</BrowserRouter>
	</StrictMode>
)
