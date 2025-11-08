import {
	addMonths,
	eachDayOfInterval,
	endOfMonth,
	format,
	getDay,
	isToday,
	startOfMonth,
	subMonths,
} from 'date-fns'
import ru from 'date-fns/locale/ru'
import { useState } from 'react'
import {
	CalendarPeriod,
	CalendarPeriodText,
	DateControl,
	SCalendar,
	SCalendarBlock,
	SCalendarCells,
	SCalendarContent,
	SCalendarDaysNames,
	SCalendarMonth,
	SCalendarNav,
	SCalendarTtl,
	SNavAction,
	SNavActions,
	StyledCalendarCell,
	StyledCalendarDayName,
} from './Calendar.styled'

export const Calendar = ({ selectedDate, onDateSelect, isEditing = false }) => {
	const [currentMonth, setCurrentMonth] = useState(selectedDate || new Date())

	const start = startOfMonth(currentMonth)
	const end = endOfMonth(currentMonth)

	const getWeekdayIndex = day => (day === 0 ? 6 : day - 1)

	const generateDays = () => {
		const days = eachDayOfInterval({ start, end }).map(date => ({
			date,
			number: date.getDate(),
			isOtherMonth: false,
			isToday: isToday(date),
		}))

		const firstDayOffset = getWeekdayIndex(getDay(start))
		const prevMonthEnd = subMonths(start, 1)
		const prevMonthEndDate = endOfMonth(prevMonthEnd)

		const prevMonthDays = []
		for (let i = firstDayOffset - 1; i >= 0; i--) {
			const date = new Date(prevMonthEndDate)
			date.setDate(date.getDate() - i)
			prevMonthDays.push({
				date,
				number: date.getDate(),
				isOtherMonth: true,
				isToday: isToday(date),
			})
		}

		const lastDayOffset = getWeekdayIndex(getDay(end))
		const nextMonthDays = []
		for (let i = 1; i <= 6 - lastDayOffset; i++) {
			const date = new Date(end)
			date.setDate(date.getDate() + i)
			nextMonthDays.push({
				date,
				number: date.getDate(),
				isOtherMonth: true,
				isToday: isToday(date),
			})
		}

		return [...prevMonthDays, ...days, ...nextMonthDays]
	}

	const allDays = generateDays()

	const handlePrevMonth = () => {
		setCurrentMonth(subMonths(currentMonth, 1))
	}

	const handleNextMonth = () => {
		setCurrentMonth(addMonths(currentMonth, 1))
	}

	return (
		<SCalendar>
			<SCalendarTtl>Даты</SCalendarTtl>
			<SCalendarBlock>
				<SCalendarNav>
					<SCalendarMonth>
						{format(currentMonth, 'LLLL yyyy', { locale: ru })}
					</SCalendarMonth>
					<SNavActions>
						<SNavAction onClick={handlePrevMonth}>
							<svg width='6' height='11' viewBox='0 0 6 11'>
								<path d='M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z' />
							</svg>
						</SNavAction>
						<SNavAction onClick={handleNextMonth}>
							<svg width='6' height='11' viewBox='0 0 6 11'>
								<path d='M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z' />
							</svg>
						</SNavAction>
					</SNavActions>
				</SCalendarNav>
				<SCalendarContent>
					<SCalendarDaysNames>
						{['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'].map((d, i) => (
							<StyledCalendarDayName key={i}>{d}</StyledCalendarDayName>
						))}
					</SCalendarDaysNames>
					<SCalendarCells>
						{allDays.map((day, i) => (
							<StyledCalendarCell
								key={i}
								$isOtherMonth={day.isOtherMonth}
								$isToday={day.isToday}
								$isActive={
									selectedDate &&
									day.date.toDateString() === selectedDate.toDateString()
								}
								onClick={() => isEditing && onDateSelect(day.date)}
							>
								{day.number}
							</StyledCalendarCell>
						))}
					</SCalendarCells>
				</SCalendarContent>
				<input
					type='hidden'
					value={selectedDate ? format(selectedDate, 'dd.MM.yyyy') : ''}
				/>
				<CalendarPeriod>
					<CalendarPeriodText>
						Срок исполнения:{' '}
						<DateControl>
							{selectedDate
								? format(selectedDate, 'dd.MM.yy', { locale: ru })
								: 'Не выбрано'}
						</DateControl>
					</CalendarPeriodText>
				</CalendarPeriod>
			</SCalendarBlock>
		</SCalendar>
	)
}
