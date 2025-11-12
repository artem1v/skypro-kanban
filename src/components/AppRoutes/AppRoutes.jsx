import { Route, Routes } from 'react-router-dom'
import BrowseCardPage from '../../pages/BrowseCardPage'
import LogOutPage from '../../pages/LogOutPage'
import MainPage from '../../pages/MainPage'
import NewCardPage from '../../pages/NewCardPage'
import NotFoundPage from '../../pages/NotFoundPage'
import PrivateRoute from '../../pages/PrivateRoute'
import SignInPage from '../../pages/SignInPage'
import SignUpPage from '../../pages/SignUpPage'

function AppRoutes() {
	return (
		<Routes>
			<Route element={<PrivateRoute />}>
				<Route path='/' element={<MainPage />}>
					<Route path='/card/add' element={<NewCardPage />} />
					<Route path='/card/:id' element={<BrowseCardPage />} />
					<Route path='/logout' element={<LogOutPage />} />
				</Route>
			</Route>
			<Route path='/sign-in' element={<SignInPage />} />
			<Route path='/sign-up' element={<SignUpPage />} />
			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	)
}

export default AppRoutes
