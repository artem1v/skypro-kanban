import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { ToastContainer } from 'react-toastify'
import AppRoutes from './components/AppRoutes/AppRoutes'
import AuthProvider from './context/AuthProvider'
import { CardProvider } from './context/CardProvider'

function App() {
	return (
		<AuthProvider>
			<CardProvider>
				<DndProvider backend={HTML5Backend}>
					<AppRoutes />
					<ToastContainer
						position='bottom-right'
						hideProgressBar
						closeOnClick
						draggable
						pauseOnHover
						toastClassName={() => 'custom-toast'}
					/>
				</DndProvider>
			</CardProvider>
		</AuthProvider>
	)
}

export default App
