import React, { Component, Fragment } from 'react';
// import { connect } from 'react-redux';
import {
	View,
	TouchableWithoutFeedback,
	TouchableOpacity,
	Keyboard,
	KeyboardAvoidingView,
	Dimensions,
	StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { FormInput, Button, BoldText } from '../../../components';
import styles from '../styles';

const { height, width } = Dimensions.get('window');

class Password extends Component {
	state = {
		password: '',
		confirmPassword: '',
		isPasswordValid: true,
		isConfirmPasswordValid: true
	};

	toNext() {
		this.props.navigation.navigate();
	}

	validatePassword() {
		const { password } = this.state;
		const regex = /^$/;
		const solution = regex.test(password);
		this.setState({ isPasswordValid: solution });
	}

	validateConfirmPassword() {
		const { confirmPassword } = this.state;
		const regex = /^$/;
		const solution = regex.test(confirmPassword);
		this.setState({ isConfirmPasswordValid: solution });
	}

	render() {
		const { password, confirmPassword, isPasswordValid, isConfirmPasswordValid } = this.state;
		const isFormValid = isPasswordValid && isConfirmPasswordValid && password && confirmPassword;
		return (
			<KeyboardAvoidingView style={styles.container} behavior="padding">
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View style={[styles.container, { width, backgroundColor: '#000000' }]}>
						<Fragment>
							<StatusBar barStyle="light-content" />
							<TouchableOpacity style={styles.goBack} onPress={() => this.props.navigation.goBack()}>
								<Icon name="arrow-left" size={30} color="#FFFFFF" />
							</TouchableOpacity>
							<View style={[styles.formContainer, { height: height / 3 }]}>
								<BoldText style={styles.headerText} type="secondary">
									Create a password
								</BoldText>
								<FormInput
									type="secondary"
									placeholder="Pick a password"
									onChangeText={password => {
										this.setState({ password });
										this.validatePassword();
									}}
									onBlur={() => this.validatePassword()}
									hasError={isPasswordValid ? false : true}
								/>
								<FormInput
									type="secondary"
									placeholder="Confirm your password"
									onChangeText={confirmPassword => {
										this.setState({ confirmPassword });
										this.validateConfirmPassword();
									}}
									onBlur={() => this.validateConfirmPassword()}
									hasError={isConfirmPasswordValid ? false : true}
								/>
								<Button
									type="secondary"
									title="Create Account"
									onPress={() => this.logIn()}
									disabled={isFormValid ? false : true}
								/>
							</View>
						</Fragment>
					</View>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		);
	}
}

// const mapDispatchToProps = dispatch => {

// }

// export default connect(null, mapDispatchToProps)(Password);
export default Password;
