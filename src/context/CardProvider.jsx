import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import CustomToast from '../components/UI/ToastWrapper/ToastWrapper'
import { KANBAN_API_URL } from '../services/apiConfig'
import { getToken } from '../services/auth'
import { AuthContext } from './AuthContext'
import { CardContext } from './CardContext'

export const CardProvider = ({ children }) => {
	const [cards, setCards] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')
	const { user } = useContext(AuthContext)

	useEffect(() => {
		if (!user?.token) return

		const loadCards = async () => {
			setLoading(true)
			try {
				const { data } = await axios.get(KANBAN_API_URL, {
					headers: { Authorization: `Bearer ${getToken()}` },
				})
				setCards(data.tasks)
			} catch (error) {
				setError(error.response?.data?.error || error.message)
				console.error('Ошибка загрузки карточек:', error.message)
			} finally {
				setLoading(false)
			}
		}

		loadCards()
	}, [user?.token])

	const addTask = async card => {
		try {
			const { data } = await axios.post(KANBAN_API_URL, card, {
				headers: {
					Authorization: `Bearer ${getToken()}`,
					'Content-Type': '',
				},
			})
			setCards(data.tasks)
			toast(<CustomToast type='success' message='Задача добавлена!' />)
		} catch (error) {
			console.error('Ошибка добавления задачи:', error.message)
			toast(<CustomToast type='error' message='Ошибка при добавлении задачи' />)
		}
	}

	const editTask = async (id, newData) => {
		const prevCard = cards.find(card => card._id === id)
		if (!prevCard) return

		const updatedCard = { ...prevCard, ...newData }

		setCards(prevCards =>
			prevCards.map(card => (card._id === id ? updatedCard : card))
		)

		try {
			await axios.put(KANBAN_API_URL + id, updatedCard, {
				headers: {
					Authorization: `Bearer ${getToken()}`,
					'Content-Type': '',
				},
			})
			toast(<CustomToast type='success' message='Задача обновлена!' />)
		} catch (error) {
			console.error('Ошибка при обновлении задачи:', error.message)
			toast(<CustomToast type='error' message='Ошибка при обновлении задачи' />)
		}
	}

	const deleteTask = async id => {
		const prevCards = [...cards]
		setCards(prev => prev.filter(card => card._id !== id))

		try {
			await axios.delete(KANBAN_API_URL + id, {
				headers: {
					Authorization: `Bearer ${getToken()}`,
				},
			})
			toast(<CustomToast type='success' message='Задача удалена!' />)
		} catch (error) {
			console.error('Ошибка при удалении задачи:', error.message)
			setCards(prevCards)
			toast(<CustomToast type='error' message='Ошибка при удалении задачи' />)
		}
	}

	return (
		<CardContext.Provider
			value={{
				cards,
				setCards,
				error,
				loading,
				editTask,
				deleteTask,
				addTask,
			}}
		>
			{children}
		</CardContext.Provider>
	)
}
