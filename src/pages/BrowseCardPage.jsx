import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PopBrowse from '../components/popups/PopBrowse/PopBrowse'
import { getCard } from '../services/api'

const BrowseCardPage = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const [card, setCard] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchCard = async () => {
			try {
				const data = await getCard(id)
				setCard(data)
				setLoading(false)
			} catch (err) {
				setError(err.message)
				setLoading(false)
			}
		}
		fetchCard()
	}, [id])

	const handleClose = () => {
		navigate('/')
	}

	return (
		<PopBrowse
			loading={loading}
			error={error}
			card={card}
			onClose={handleClose}
		/>
	)
}

export default BrowseCardPage
