import styled, { css } from 'styled-components'

export const SCalendar = styled.div`
	font-family: 'Roboto', Arial, Helvetica, sans-serif;
	@media (max-width: 768px) {
		width: 100%;
	}
`

export const SCalendarTtl = styled.h2`
	font-size: 14px;
	color: ${({ theme }) => theme.colors.text};
	margin-bottom: 7px;
`

export const SCalendarBlock = styled.div``

export const SCalendarNav = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 7px;
`

export const SCalendarMonth = styled.div`
	font-size: 14px;
	font-weight: semibold;
	text-transform: capitalize;
	color: ${({ theme }) => theme.colors.secondary};
`

export const SNavActions = styled.div`
	display: flex;
	gap: 0.5rem;
`

export const SNavAction = styled.button`
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0.3rem;
	display: flex;
	align-items: center;
	justify-content: center;

	svg {
		fill: ${({ theme }) => theme.colors.secondary};
		transition: fill 0.2s ease;
	}

	&:hover svg {
		fill: ${({ theme }) => theme.colors.primary};
	}
`

export const SCalendarContent = styled.div``

export const SCalendarDaysNames = styled.div`
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	margin-bottom: 0.5rem;
	gap: 15px;

	@media (max-width: 768px) {
		gap: 30px;
	}
`

export const StyledCalendarDayName = styled.div`
	text-align: center;
	font-weight: bold;
	font-size: 10px;
	color: ${({ theme }) => theme.colors.secondary};
`

export const SCalendarCells = styled.div`
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	gap: 10px;

	@media (max-width: 768px) {
		gap: 30px;
	}
`

export const StyledCalendarCell = styled.div`
	text-align: center;
	font-size: 10px;
	padding: 5px;
	border-radius: 50%;
	cursor: pointer;
	color: ${({ theme }) => theme.colors.secondary};
	transition: background 0.2s ease;

	${props =>
		props.$isOtherMonth &&
		css`
			color: transparent;
		`}

	${props =>
		props.$isToday &&
		css`
			font-weight: bold;
			color: #a2acb9ff;
		`}

  ${props =>
		props.$isActive &&
		css`
			background: ${({ theme }) => theme.colors.secondary};
			color: ${({ theme }) => theme.colors.tertiary};
		`}

  &:hover {
		background: ${({ theme }) => theme.colors.secondary};
		color: ${({ theme }) => theme.colors.tertiary};
	}
`

export const CalendarPeriod = styled.div`
	margin-top: 1rem;
`

export const CalendarPeriodText = styled.p`
	font-size: 10px;
	color: #94a6be;
`

export const DateControl = styled.span`
	font-weight: bold;
	color: ${({ theme }) => theme.colors.text};
`
