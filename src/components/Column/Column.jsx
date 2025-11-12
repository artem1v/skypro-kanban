import { useContext } from 'react'
import { useDrop } from 'react-dnd'
import { CardContext } from '../../context/CardContext'
import Cards from '../Card/Cards'
import { Scolumn, ScolumnTitle } from './Column.styled'

export default function Column({ title, cards }) {
	const { editTask } = useContext(CardContext)
	const [{ isOver }, dropRef] = useDrop({
		accept: 'CARD',
		drop: item => {
			editTask(item.id, { status: title })
		},
		collect: monitor => ({
			isOver: monitor.isOver(),
		}),
	})

	return (
		<Scolumn
			ref={dropRef}
			style={{
				border: isOver ? 'none' : 'none',
			}}
		>
			<ScolumnTitle>
				<p>{title}</p>
			</ScolumnTitle>
			<Cards cards={cards} />
		</Scolumn>
	)
}
