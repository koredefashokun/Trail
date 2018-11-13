import { post } from './requests';
// Token wouldn't have been initialized! so token = undefined! Null is better, though! ;-)

export default class AuthService {
	static async logIn(username, password) {
		return await post('/auth/login', null, { username, password });
	}
	static async register(...args) {
		// Not sure if this will work. Maybe ES6+ issues.
		return await post('/auth/register', null, { ...args });
	}
}
