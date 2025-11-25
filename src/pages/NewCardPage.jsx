import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PopNewCard from '../components/popups/PopNewCard/PopNewCard'
import { CardContext } from '../context/CardContext'

const categoryMap = {
	orange: 'Web Design',
	green: 'Research',
	purple: 'Copywriting',
}

const NewCardPage = () => {
	const [selectedDate, setSelectedDate] = useState(null)
	const [activeCategory, setActiveCategory] = useState('')
	const [loading, setLoading] = useState(false)
	const [formData, setFormData] = useState({
		name: '',
		text: '',
	})
	const [errors, setErrors] = useState({})

	const navigate = useNavigate()
	const { addTask } = useContext(CardContext)

	const handleCategoryClick = color => {
		setActiveCategory(color)
		setErrors(prev => ({ ...prev, category: false }))
	}

	const handleInputChange = e => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
		setErrors(prev => ({ ...prev, [name]: false }))
	}

	const validate = () => {
		const newErrors = {}
		if (!formData.name.trim()) newErrors.name = 'Название задачи обязательно'
		if (!formData.text.trim()) newErrors.text = 'Описание задачи обязательно'
		if (!activeCategory) newErrors.category = 'Выберите категорию'

		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	const handleSubmit = async e => {
		e.preventDefault()

		if (!validate()) return

		setLoading(true)

		const card = {
			title: formData.name.trim(),
			description: formData.text.trim(),
			topic: categoryMap[activeCategory] || 'Research',
			status: 'Без статуса',
			date: selectedDate
				? selectedDate.toISOString()
				: new Date().toISOString(),
		}

		try {
			await addTask(card)
			navigate('/')
		} catch (error) {
			console.error('Ошибка при создании карточки:', error)
		} finally {
			setLoading(false)
		}
	}

	const handleClose = () => {
		navigate('/')
	}

	return (
		<PopNewCard
			activeCategory={activeCategory}
			onCategoryClick={handleCategoryClick}
			onSubmit={handleSubmit}
			onClose={handleClose}
			selectedDate={selectedDate}
			onDateSelect={setSelectedDate}
			loading={loading}
			formData={formData}
			onInputChange={handleInputChange}
			errors={errors}
		/>
	)
}

export default NewCardPage
