import axios from 'axios';
const ROOT_API = 'https://tw-blog-app.herokuapp.com/api'

const API = axios.create({
	withCredentials: true,
	baseURL: ROOT_API
})

API.interceptors.request.use(cfg => {
	cfg.headers.Authorization = localStorage.getItem('accToken')
		? `Bearer ${localStorage.getItem('accToken')}`
		: `Bearer `
	return cfg
})

export default API