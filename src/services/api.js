import axios from 'axios'
import { KANBAN_API_URL } from './apiConfig'
import { getToken } from './auth'

export async function getCard(id) {
	try {
		const token = getToken()
		const { data } = await axios.get(`${KANBAN_API_URL}${id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		return data.task
	} catch (error) {
		throw new Error(error.response?.data?.error || error.message)
	}
}
