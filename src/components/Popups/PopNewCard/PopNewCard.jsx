import { Calendar } from '../../Calendar/Calendar'
import ButtonWithLoader from '../../Loaders/ButtonWithLoader'
import * as S from './PopNewCard.styled'

const categories = [
	{ color: 'orange', label: 'Web Design' },
	{ color: 'green', label: 'Research' },
	{ color: 'purple', label: 'Copywriting' },
]

export default function PopNewCard({
	activeCategory,
	onCategoryClick,
	onSubmit,
	onClose,
	selectedDate,
	onDateSelect,
	loading,
	formData,
	onInputChange,
	errors,
}) {
	return (
		<S.PopNewCard>
			<S.PopNewCardContainer onClick={onClose}>
				<S.PopNewCardBlock onClick={e => e.stopPropagation()}>
					<S.PopNewCardClose onClick={onClose}>✖</S.PopNewCardClose>
					<S.PopNewCardContent>
						<S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
						<S.PopNewCardWrap>
							<S.PopNewCardForm id='NewTaskForm' onSubmit={onSubmit} noValidate>
								<input type='hidden' name='category' value={activeCategory} />
								<S.FormNewBlock>
									<S.FormNewLabel htmlFor='formTitle'>
										Название задачи
									</S.FormNewLabel>
									<S.FormNewInput
										type='text'
										name='name'
										id='formTitle'
										placeholder='Введите название задачи...'
										autoFocus
										value={formData.name}
										onChange={onInputChange}
										$error={errors.name}
									/>
									{errors.name && <S.ErrorText>{errors.name}</S.ErrorText>}
								</S.FormNewBlock>

								<S.FormNewBlock>
									<S.FormNewLabel htmlFor='textArea'>
										Описание задачи
									</S.FormNewLabel>
									<S.FormNewArea
										name='text'
										id='textArea'
										placeholder='Введите описание задачи...'
										value={formData.text}
										onChange={onInputChange}
										$error={errors.text}
									/>
									{errors.text && <S.ErrorText>{errors.text}</S.ErrorText>}
								</S.FormNewBlock>

								<S.Categories>
									<S.CategoriesP>Категория</S.CategoriesP>
									<S.CategoriesThemes>
										{categories.map(({ color, label }) => (
											<S.CategoryTheme
												key={color}
												color={color}
												$isActive={activeCategory === color}
												onClick={() => onCategoryClick(color)}
											>
												<S.CategoryText>{label}</S.CategoryText>
											</S.CategoryTheme>
										))}
									</S.CategoriesThemes>
									{errors.category && (
										<S.ErrorText>{errors.category}</S.ErrorText>
									)}
								</S.Categories>
							</S.PopNewCardForm>

							<Calendar
								selectedDate={selectedDate}
								onDateSelect={onDateSelect}
								isEditing={true}
							/>
						</S.PopNewCardWrap>

						<S.PopNewCardSubmit>
							<ButtonWithLoader
								type='submit'
								form='NewTaskForm'
								loading={loading}
								$variant='primary'
							>
								Создать задачу
							</ButtonWithLoader>
						</S.PopNewCardSubmit>
					</S.PopNewCardContent>
				</S.PopNewCardBlock>
			</S.PopNewCardContainer>
		</S.PopNewCard>
	)
}
