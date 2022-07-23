import API from '../http/axiosIndex'

class UserService {

	async getUsers() {
		API.get('/users')
			.then(res => res.data)
	}

	async getPosts() {
		return API.get('/posts')
			.then(res => res.data)
	}

	async createPosts(postPayload) {
		return API.post('/posts', postPayload)
			.then(res => res.data)
	}

	async deletePosts(postData) {
		return API.delete('/posts', {data: postData})
			.then(res => res.data)
	}

	async editPosts(postData) {
		return API.patch('/posts', postData)
			.then(res => res.data)
	}
}

export default new UserService()
