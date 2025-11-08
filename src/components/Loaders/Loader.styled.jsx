import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
		0% {
		opacity: 0.5;
	}
	50% {
		opacity: 1;
	}
	100% {
		opacity: 0.5;
	}
`
export const Cloader = styled.div`
	border-radius: 2px;
	animation: ${pulse} 1.5s infinite ease-in-out;
	&:first-child {
		border-radius: 18px;
	}
	&:last-child {
		margin-top: 6px;
	}
`
