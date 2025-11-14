import {
	ScardLoader,
	ScardLoaderContent,
	ScardLoaderPretitle,
	ScardLoaderTitle,
} from './CardLoader.styled'
import Loader from './Loader'

const CardLoader = () => {
	return (
		<ScardLoader>
			<ScardLoaderContent>
				<ScardLoaderPretitle>
					<Loader width={82} height={20} />
					<Loader width={18} height={4} />
				</ScardLoaderPretitle>
				<ScardLoaderTitle>
					<Loader width={113} height={13} />
					<Loader width={58} height={13} />
				</ScardLoaderTitle>
			</ScardLoaderContent>
		</ScardLoader>
	)
}

export default CardLoader
