import {makeAutoObservable} from "mobx";

class UserGlobalStore {
	constructor() {
		this._isAuth = false
		this._user = {}
		makeAutoObservable(this)
	}

	setIsAuth(state = false) {
		this._isAuth = state
	}

	setUser(state = false) {
		this._user = state
	}

	// getters
	get isAuth() {
		return this._isAuth
	}

	get user() {
		return this._user
	}
}

export default UserGlobalStore