import * as React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Feather';

import Feed from './Feed';
import Map from './Map';
import Nearby from './Nearby';

const Main = createBottomTabNavigator(
	{
		Feed: { screeen: Feed },
		Map: { screen: Map },
		Nearby: { screen: Nearby }
	},
	{
		navigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ tintColor }) => {
				const { routeName } = navigation.state;
				let iconName;
				if (routeName === 'Feed') {
					iconName = 'home';
				} else if (routeName === 'Map') {
					iconName = 'map';
				} else if (routeName === 'Nearby') {
					iconName = 'map-pin';
				}
				return <Icon name={iconName} size={25} color={tintColor} />;
			}
		}),
		tabBarOptions: {
			activeTintColor: '#000000',
			inactiveTintColor: 'gray'
		},
		tabBarPosition: 'bottom',
		animationEnabled: false,
		swipeEnabled: true
	}
);

export default Main;
