import { createStackNavigator } from 'react-navigation';

import Name from './Name';
import Username from './Username';
import Email from './Email';
import Password from './Password';

const Register = createStackNavigator(
	{
		Name: { screen: Name },
		Email: { screen: Email },
		Username: { screen: Username },
		Password: { screen: Password }
	},
	{
		headerMode: 'none'
	}
);

export default Register;