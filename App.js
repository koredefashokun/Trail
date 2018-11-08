import * as React from 'react';
import Auth from './src/screens/Auth';
import { useScreens } from 'react-native-screens';

useScreens();

const App = () => (
  <Auth />
);

const AppContainer = () => <App />;

export default AppContainer;