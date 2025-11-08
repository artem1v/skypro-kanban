import styled from 'styled-components'

export const Scolumn = styled.div`
	width: 20%;
	margin: 0 auto;
	display: block;
	@media screen and (max-width: 1200px) {
		width: 100%;
		margin: 0 auto;
		display: block;
	}
`

export const ScolumnTitle = styled.div`
	padding: 0 10px;
	margin: 15px 0;
	p {
		color: ${({ theme }) => theme.colors.secondary};
		font-size: 14px;
		font-weight: 600;
		line-height: 1;
		text-transform: uppercase;
	}
`
