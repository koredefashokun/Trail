import * as React from 'react';
import { Text } from 'react-native';
import Palette from './Palette';

const { black, white } = Palette;

const types = {
	primary: { color: black },
	secondary: { color: white }
};

export const NormalText = ({ style, type, children }) => (
	<Text
		style={{
			fontFamily: 'Karla-Regular',
			lineHeight: 25.5,
			color: type ? types[type].color : black,
			...style
		}}>
		{children}
	</Text>
);

export const BoldText = ({ style, type, children }) => (
	<Text
		style={{
			fontFamily: 'Karla-Bold',
			lineHeight: 25.5,
			color: type ? types[type].color : black,
			...style
		}}>
		{children}
	</Text>
);
