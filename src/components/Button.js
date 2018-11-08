import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import Palette from './Palette';
import { BoldText } from './Text';

const { black, white, lightGrey } = Palette;

const types = {
	primary: {
		backgroundColor: black,
		textColor: white
	},
	secondary: {
		backgroundColor: lightGrey,
		textColor: black
	}
};

export const Button = ({ title, type, onPress, disabled, style } = {}) => (
	<TouchableOpacity
		{...{ disabled, onPress }}
		style={{
			...style,
			backgroundColor: types[type].backgroundColor,
			alignItems: 'center',
			justifyContent: 'center',
			width: '100%',
			height: 40,
			borderRadius: 5
		}}>
		<BoldText style={{ fontSize: 18, color: types[type].textColor }}>
			{title}
		</BoldText>
	</TouchableOpacity>
);