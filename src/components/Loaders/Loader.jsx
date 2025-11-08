import { useTheme } from 'styled-components'
import { Cloader } from './Loader.styled'

const Loader = ({ width = 220, height = 130 }) => {
	const theme = useTheme()
	const colorStart = theme.loaderStart || '#c1cddc'
	const colorEnd = theme.loaderEnd || '#e9eef7'

	return (
		<Cloader
			style={{
				width: `${width}px`,
				height: `${height}px`,
				background: `linear-gradient(90deg, ${colorStart}, ${colorEnd})`,
			}}
		></Cloader>
	)
}

export default Loader
