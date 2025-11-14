import { useContext } from 'react'
import { useDragLayer } from 'react-dnd'
import { CardContext } from '../../context/CardContext'
import { topicMapping } from '../../data'
import CardLoader from '../Loaders/cardLoader'
import Card from './Card'
import { Scards, ScardsItem } from './Cards.styled'

export default function Cards({ cards }) {
	const { loading } = useContext(CardContext)
	const { isDragging: isCardDragging, itemType } = useDragLayer(monitor => ({
		isDragging: monitor.isDragging(),
		itemType: monitor.getItemType(),
	}))

	const shouldShowPlaceholder = isCardDragging && itemType === 'CARD'

	if (loading) {
		return (
			<Scards>
				{Array(3)
					.fill(null)
					.map((_, index) => (
						<ScardsItem key={index}>
							<CardLoader />
						</ScardsItem>
					))}
			</Scards>
		)
	}

	if (cards.length === 0) {
		return (
			<Scards>
				{shouldShowPlaceholder && (
					<ScardsItem
						style={{
							border: '2px dashed #94A6BE',
							borderRadius: '10px',
							width: '220px',
							height: '130px',
							background: 'transparent',
							opacity: 0.6,
						}}
					/>
				)}
			</Scards>
		)
	}

	return (
		<Scards>
			{cards.map(card => (
				<ScardsItem key={card._id}>
					<Card
						id={card._id}
						colorTheme={topicMapping[card.topic] || 'default'}
						topic={card.topic}
						title={card.title}
						date={card.date}
					/>
				</ScardsItem>
			))}
			{shouldShowPlaceholder && (
				<ScardsItem
					style={{
						border: '2px dashed #94A6BE',
						borderRadius: '10px',
						width: '220px',
						height: '130px',
						background: 'transparent',
						opacity: 0.6,
					}}
				/>
			)}
		</Scards>
	)
}
