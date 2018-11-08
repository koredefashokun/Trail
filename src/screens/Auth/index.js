import { createStackNavigator } from 'react-navigation';

import Login from './Login';
import Register from './Register';

const Auth = createStackNavigator(
	{
		Login: { screen: Login },
		Register: { screen: Register }
	}, {
		headerMode: 'none'
	}
);

export default Auth;