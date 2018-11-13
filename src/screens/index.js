import { createStackNavigator } from 'react-navigation';

import Auth from './Auth';
import Main from './Main';

const AppNavigator = createStackNavigator(
	{
		Auth: { screen: Auth },
		Main: { screen: Main }
	},
	{
		headerMode: 'none'
	}
);

export default AppNavigator;
