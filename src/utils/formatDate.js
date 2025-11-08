export function formatDate(dateString) {
	const dateObj = new Date(dateString)
	const day = String(dateObj.getDate()).padStart(2, '0')
	const month = String(dateObj.getMonth() + 1).padStart(2, '0')
	const year = String(dateObj.getFullYear()).slice(2)
	return `${day}.${month}.${year}`
}
