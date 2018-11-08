import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 20
	},
	formContainer: {
		width: '100%',
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerText: {
		fontSize: 32,
		alignSelf: 'center',
		lineHeight: 32
	},
	goBack: {
		position: 'absolute',
		top: 50,
		left: 15
	}
});

export default styles;