import styled from 'styled-components'

export const ScardLoader = styled.div`
	background: ${({ theme }) => theme.colors.cardBg};
	border-radius: 10px;
	padding: 15px 17px 19px 13px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	width: 220px;
`

export const ScardLoaderContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
`
export const ScardLoaderPretitle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const ScardLoaderTitle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
`
