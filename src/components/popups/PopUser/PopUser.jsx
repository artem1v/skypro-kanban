import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import {
	SPopUserSet,
	SPopUserSetBtn,
	SPopUserSetMail,
	SPopUserSetName,
	SPopUserSetTheme,
} from './PopUser.styled'

export default function PopUser({ user }) {
	const { themeName, toggleTheme } = useContext(ThemeContext)

	return (
		<SPopUserSet id='user-set-target'>
			<SPopUserSetName>{user?.user?.name || 'Имя не указано'}</SPopUserSetName>
			<SPopUserSetMail>
				{user?.user?.login || 'Email не указан'}
			</SPopUserSetMail>
			<SPopUserSetTheme>
				<p>Темная тема</p>
				<input
					type='checkbox'
					name='checkbox'
					onChange={toggleTheme}
					checked={themeName === 'dark'}
				/>
			</SPopUserSetTheme>
			<SPopUserSetBtn to='/logout'>Выйти</SPopUserSetBtn>
		</SPopUserSet>
	)
}
