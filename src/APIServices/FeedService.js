import { AsyncStorage } from 'react-native';
import { get } from './requests';

const { token } = JSON.parse(AsyncStorage.getItem('@Trail:user'));

export default class FeedService {
	static async getFeed() {
		return await get('/feeds/userId', token);
	}
}
