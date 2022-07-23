import API from '../http/axiosIndex'

class AuthService {

	async registration(email, password) {
		return API.post('/register', {email, password})
			.then(res => {
				if (res.data?.ok) {
					localStorage.setItem('accToken', res.data?.data?.accToken)
					return res.data
				}
				return res.data
			})
	}

	async login(email, password) {
		return API.post('/login', {email, password})
			.then(res => {
				if (res.data?.ok) {
					localStorage.setItem('accToken', res.data?.data?.accToken)
					return res.data
				}
				return res.data
			})
	}

	async checkSession() {
		return API.get('/checkAuth')
			.then(res => {
				if (res.data?.ok) {
					localStorage.setItem('accToken', res.data?.data?.accToken)
					return res.data
				}
				return res.data
			})
	}
}

export default new AuthService()