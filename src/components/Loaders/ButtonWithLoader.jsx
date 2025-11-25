import * as S from './ButtonWithLoader.styled'

const ButtonWithLoader = ({
	children,
	loading = false,
	$variant = 'primary',
	...props
}) => {
	return (
		<S.Button
			$variant={$variant}
			disabled={loading || props.disabled}
			{...props}
		>
			<span style={{ visibility: loading ? 'hidden' : 'visible' }}>
				{children}
			</span>
			{loading && (
				<span className='loader-wrapper'>
					<S.BtnLoader />
				</span>
			)}
		</S.Button>
	)
}

export default ButtonWithLoader
