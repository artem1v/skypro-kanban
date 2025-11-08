import styled from 'styled-components'

export const Smain = styled.main`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.tertiary};
`
export const Scontainer = styled.div`
	max-width: 1260px;
	width: 100%;
	margin: 0 auto;
	padding: 0 30px;
	@media screen and (max-width: 495px) {
		width: 100%;
		padding: 0 16px;
	}
`
export const SmainBlock = styled.div`
	width: 100%;
	margin: 0 auto;
	padding: 25px 0 49px;
	@media screen and (max-width: 1200px) {
		width: 100%;
		margin: 0 auto;
		padding: 40px 0 64px;
	}
`
export const SmainContent = styled.div`
	width: 100%;
	display: flex;
	@media screen and (max-width: 1200px) {
		display: block;
	}
`
