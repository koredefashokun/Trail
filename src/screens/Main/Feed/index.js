import { createStackNavigator } from 'react-navigation';

import Feed from './Feed';
import Create from './Create';

const FeedNavigator = createStackNavigator(
	{
		Feed: { screen: Feed },
		Create: { screen: Create }
	},
	{
		headerMode: 'none',
		mode: 'modal'
	}
);

export default FeedNavigator;
