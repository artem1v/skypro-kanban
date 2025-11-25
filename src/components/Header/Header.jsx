import { useContext, useRef, useState } from 'react'
import { useTheme } from 'styled-components'
import { AuthContext } from '../../context/AuthContext'
import { Scontainer } from '../Main/Main.styled'
import PopUser from '../popups/PopUser/PopUser'
import {
	Hblock,
	Hbtn,
	HbtnMobile,
	Hlogo,
	Hnav,
	Huser,
	Sheader,
} from './Header.styled'

export default function Header() {
	const userBtnRef = useRef(null)
	const [isPopUserOpen, setIsPopUserOpen] = useState(false)
	const { user } = useContext(AuthContext)
	const theme = useTheme()
	const isDark = theme.mode === 'dark'
	const logoSrc = isDark ? 'images/logo_dark.png' : 'images/logo.png'

	return (
		<Sheader>
			<Scontainer>
				<Hblock>
					<Hlogo>
						<a href='' target='_self'>
							<img src={logoSrc} alt='logo' />
						</a>
					</Hlogo>
					<Hnav>
						<Hbtn id='btnMainNew' to='/card/add'>
							Создать новую задачу
						</Hbtn>
						<HbtnMobile to='/card/add'>Создать новую задачу</HbtnMobile>
						<Huser
							ref={userBtnRef}
							onClick={e => {
								e.preventDefault()
								setIsPopUserOpen(!isPopUserOpen)
							}}
						>
							{user?.user?.name || 'Гость'}
						</Huser>
						{isPopUserOpen && (
							<PopUser
								user={user}
								togglePopExit={() => setIsPopUserOpen(false)}
							/>
						)}
					</Hnav>
				</Hblock>
			</Scontainer>
		</Sheader>
	)
}
