import * as React from 'react';
import { useScreens } from 'react-native-screens';
import Analytics from 'appcenter-analytics';
import Auth from './src/screens/Auth';

Analytics.setEnabled(true);
useScreens();

const App = () => <Auth />;

const AppContainer = () => <App />;

export default AppContainer;
