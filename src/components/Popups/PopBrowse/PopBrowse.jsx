import { useContext, useEffect, useState } from 'react'
import { CardContext } from '../../../context/CardContext'
import { topicMapping } from '../../../data'
import { Calendar } from '../../Calendar/Calendar'
import ButtonWithLoader from '../../Loaders/ButtonWithLoader'
import * as S from './PopBrowse.styled'

const STATUSES = [
	'Без статуса',
	'Нужно сделать',
	'В работе',
	'Тестирование',
	'Готово',
]

export default function PopBrowse({ loading, error, card, onClose }) {
	const { editTask, deleteTask } = useContext(CardContext)
	const [isEditing, setIsEditing] = useState(false)
	const [editedCard, setEditedCard] = useState(null)
	const [isSaving, setIsSaving] = useState(false)
	const [isDeleting, setIsDeleting] = useState(false)

	useEffect(() => {
		if (card) {
			setEditedCard({
				...card,
				date: card.date || new Date().toISOString(),
			})
		}
	}, [card])

	const handleEdit = () => setIsEditing(true)

	const handleCancel = () => {
		setEditedCard(card)
		setIsEditing(false)
	}

	const handleSave = async () => {
		setIsSaving(true)
		try {
			await editTask(card._id, editedCard)
			setIsEditing(false)
		} catch (error) {
			console.error('Ошибка при сохранении:', error.message)
		} finally {
			setIsSaving(false)
		}
	}

	const handleDelete = async () => {
		setIsDeleting(true)
		try {
			await deleteTask(card._id)
			onClose()
		} catch (error) {
			console.error('Ошибка при удалении:', error.message)
		} finally {
			setIsDeleting(false)
		}
	}

	const handleInputChange = e => {
		const { name, value } = e.target
		setEditedCard(prev => ({ ...prev, [name]: value }))
	}

	const handleStatusChange = status => {
		setEditedCard(prev => ({ ...prev, status }))
	}

	if (loading || !editedCard) {
		return (
			<S.PopBrowse>
				<S.PopBrowseContainer onClick={onClose}>
					<S.PopBrowseBlock onClick={e => e.stopPropagation()}>
						<S.PopBrowseContent>
							<S.LoadingMessage>Загрузка карточки...</S.LoadingMessage>
						</S.PopBrowseContent>
					</S.PopBrowseBlock>
				</S.PopBrowseContainer>
			</S.PopBrowse>
		)
	}

	if (error) {
		return (
			<S.PopBrowse>
				<S.PopBrowseContainer onClick={onClose}>
					<S.PopBrowseBlock onClick={e => e.stopPropagation()}>
						<S.PopBrowseContent>
							<S.ErrorMessage>Ошибка: {error}</S.ErrorMessage>
						</S.PopBrowseContent>
					</S.PopBrowseBlock>
				</S.PopBrowseContainer>
			</S.PopBrowse>
		)
	}

	return (
		<S.PopBrowse>
			<S.PopBrowseContainer onClick={onClose}>
				<S.PopBrowseBlock onClick={e => e.stopPropagation()}>
					<S.PopBrowseContent>
						<S.PopBrowseTopBlock>
							<S.PopBrowseTtl>
								{editedCard?.title || 'Название задачи'}
							</S.PopBrowseTtl>
							<S.ThemeBlock
								$themeColor={topicMapping[editedCard?.topic] || 'Цвет задачи'}
								$isActive
							>
								{editedCard?.topic || 'Статус задачи'}
							</S.ThemeBlock>
						</S.PopBrowseTopBlock>

						<S.StatusBlock>
							<S.StatusTitle>Статус</S.StatusTitle>
							<S.StatusThemes>
								{isEditing ? (
									STATUSES.map(status => (
										<S.ThemeBlock
											key={status}
											$themeColor={
												status === editedCard.status ? 'gray' : 'default'
											}
											$isActive={status === editedCard.status}
											onClick={() => handleStatusChange(status)}
										>
											{status}
										</S.ThemeBlock>
									))
								) : (
									<S.ThemeBlock $themeColor='gray' $isActive>
										{editedCard.status}
									</S.ThemeBlock>
								)}
							</S.StatusThemes>
						</S.StatusBlock>

						<S.PopBrowseWrap>
							<S.PopBrowseForm onSubmit={e => e.preventDefault()}>
								<S.BrowseFormBlock>
									<S.BrowseFormLabel htmlFor='textArea01'>
										Описание задачи
									</S.BrowseFormLabel>
									<S.BrowseFormArea
										name='description'
										id='textArea01'
										value={editedCard.description || ''}
										onChange={handleInputChange}
										readOnly={!isEditing}
										$isEditing={isEditing}
										placeholder='Описание задачи'
									/>
								</S.BrowseFormBlock>
							</S.PopBrowseForm>
							<Calendar
								isEditing={isEditing}
								selectedDate={new Date(editedCard.date)}
								onDateSelect={date =>
									setEditedCard(prev => ({ ...prev, date: date.toISOString() }))
								}
							/>
						</S.PopBrowseWrap>

						<S.BtnBlock $isVisible={!isEditing}>
							<S.BtnGroup>
								<S.Button $variant='secondary' onClick={handleEdit}>
									Редактировать задачу
								</S.Button>
								<ButtonWithLoader
									$variant='secondary'
									onClick={handleDelete}
									loading={isDeleting}
								>
									Удалить задачу
								</ButtonWithLoader>
							</S.BtnGroup>
							<S.Button $variant='primary' onClick={onClose}>
								Закрыть
							</S.Button>
						</S.BtnBlock>

						<S.BtnBlock $isVisible={isEditing}>
							<S.BtnGroup>
								<ButtonWithLoader
									$variant='primary'
									onClick={handleSave}
									loading={isSaving}
								>
									Сохранить
								</ButtonWithLoader>
								<S.Button $variant='secondary' onClick={handleCancel}>
									Отменить
								</S.Button>
								<ButtonWithLoader
									$variant='secondary'
									onClick={handleDelete}
									loading={isDeleting}
								>
									Удалить задачу
								</ButtonWithLoader>
							</S.BtnGroup>
							<S.Button $variant='primary' onClick={onClose}>
								Закрыть
							</S.Button>
						</S.BtnBlock>
					</S.PopBrowseContent>
				</S.PopBrowseBlock>
			</S.PopBrowseContainer>
		</S.PopBrowse>
	)
}
