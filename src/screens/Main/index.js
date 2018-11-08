import { createBottomTabNavigator } from 'react-navigation';

const Main = createBottomTabNavigator(
	{},
	{
		tabBarComponent = ({ navigation }) => <TabBar {...{ navigation }} />
	}
);

export default Main;