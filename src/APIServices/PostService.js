import { AsyncStorage } from 'react-native';
import Analytics from 'appcenter-analytics';
import { get, post } from './requests';

const { token } = JSON.parse(AsyncStorage.getItem('@Trail:user'));

export default class PostService {
	static async createPost(text) {
		Analytics.trackEvent('Post Creation', { text });
		return await post('/posts/create', token, { text });
	}
	static async getPost(id) {
		Analytics.trackEvent('Post Reading', { id });
		return await get(`/posts/${id}`, token);
	}
	static async editPost(id, text) {
		Analytics.trackEvent('Post Editing', { id, text });
		return await post(`/posts/${id}`, token, { text }); // Use the actual protocol.
	}
	static async deletePost(id) {
		Analytics.trackEvent('Post Deletion', { id });
		return get(`/posts/${id}`, token); // Use the actual protocol.
	}
}
