import * as React from 'react';
import { TextInput } from 'react-native';
import Palette from './Palette';

const { black, white, darkGrey, lightGrey, red } = Palette;

const types = {
	primary: {
		backgroundColor: lightGrey,
		textColor: black,
		placeholderColor: darkGrey
	},
	secondary: {
		backgroundColor: darkGrey,
		textColor: white,
		placeholderColor: lightGrey
	}
};

export const FormInput = ({ placeholder, type, onChangeText, onBlur, hasError } = {}) => (
	<TextInput
		{...{ onChangeText, onBlur, placeholder }}
		style={{
			color: hasError ? white : types[type].textColor,
			backgroundColor: hasError ? red : types[type].backgroundColor,
			width: '100%',
			height: 40,
			borderRadius: 5,
			padding: 10,
			fontSize: 16,
			fontFamily: 'Karla-Regular'
		}}
		autoCorrect={false}
		autoCapitalize="none"
		placeholderTextColor={types[type].placeholderColor}
		underlineColorAndroid="transparent"
	/>
);

export const SearchInput = ({ placeholder, onChangeText } = {}) => (
	<TextInput
		{...{ onChangeText, placeholder }}
		style={{
			color: darkGrey,
			backgroundColor: lightGrey,
			width: '100%',
			height: 40,
			borderRadius: 5,
			padding: 10,
			fontSize: 16,
			fontFamily: 'Karla-Regular'
		}}
		autoCapitalize="none"
		autoCorrect={false}
		returnKeyType="search"
		placeholderTextColor={darkGrey}
		underlineColorAndroid="transparent"
	/>
);

export const TextArea = ({ style, placeholder, onChangeText }) => (
	<TextInput
		{...{ placeholder, onChangeText }}
		style={{
			...style,
			color: '#000000',
			fontSize: 16,
			fontFamily: 'Karla-Regular',
			width: '100%',
			height: '100%'
		}}
		placeholderTextColor="#505050"
		autoCapitalize="none"
		underlineColorAndroid="transparent"
		multiline
	/>
);
