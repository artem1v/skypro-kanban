import { motion } from 'framer-motion'
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react'
import styled, { useTheme } from 'styled-components'

const ToastWrapper = styled(motion.div)`
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 16px 20px;
	border-radius: 12px;
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
	background-color: ${({ theme, $type }) => theme.toast.bg[$type]};
	color: ${({ theme, $type }) => theme.toast.color[$type]};
`

const IconWrapper = styled.div`
	display: flex;
	align-items: center;
`

const Message = styled.div`
	font-size: 16px;
	font-weight: 500;
	color: ${({ theme }) => theme.colors.text};
`

export default function CustomToast({ type = 'success', message = 'Готово!' }) {
	const theme = useTheme()

	const Icon =
		type === 'success'
			? CheckCircle
			: type === 'error'
			? XCircle
			: AlertTriangle

	return (
		<ToastWrapper
			$type={type}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 20 }}
			theme={theme}
		>
			<IconWrapper>
				<Icon size={16} />
			</IconWrapper>
			<Message>{message}</Message>
		</ToastWrapper>
	)
}
