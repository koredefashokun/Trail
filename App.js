import * as React from 'react';
import { useScreens } from 'react-native-screens';
import Analytics from 'appcenter-analytics';
import SplashScreen from 'react-native-splash-screen';
// import Auth from './src/screens/Auth';
import Feed from './src/screens/Main/Feed';
// import AppNavigator from './src/screens';

SplashScreen.hide();
Analytics.setEnabled(true);
useScreens();

const App = () => <Feed />;

const AppContainer = () => <App />;

export default AppContainer;
