import { useContext } from 'react'
import { CardContext } from '../../context/CardContext.js'
import Column from '../Column/Column'
import { Scontainer, Smain, SmainBlock, SmainContent } from './Main.styled.jsx'

export default function Main() {
	const { cards, error } = useContext(CardContext)

	if (error) {
		return (
			<Smain>
				<Scontainer>
					<p>Ошибка: {error}</p>
				</Scontainer>
			</Smain>
		)
	}

	const allStatuses = [
		'Без статуса',
		'Нужно сделать',
		'В работе',
		'Тестирование',
		'Готово',
	]

	const cardsByStatus = cards?.reduce((acc, card) => {
		if (!card) return acc
		const status = card.status || 'Без статуса'
		if (!acc[status]) acc[status] = []
		acc[status].push(card)
		return acc
	}, {})

	return (
		<Smain>
			<Scontainer>
				<SmainBlock>
					<SmainContent>
						{allStatuses.map(status => (
							<Column
								key={status}
								title={status}
								cards={cardsByStatus[status] || []}
							/>
						))}
					</SmainContent>
				</SmainBlock>
			</Scontainer>
		</Smain>
	)
}
