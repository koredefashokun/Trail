import React, { Component } from 'react';
// import { connect } from 'react-redux';
import {
	View,
	TouchableWithoutFeedback,
	TouchableOpacity,
	Keyboard,
	KeyboardAvoidingView,
	Dimensions
} from 'react-native';

import { FormInput, Button, BoldText } from '../../../components';
import styles from '../styles';

const { height, width } = Dimensions.get('window');

class Login extends Component {
	state = {
		username: '',
		password: '',
		isUsernameValid: true,
		isPasswordValid: true
	};

	logIn() {
		const { username, password } = this.state;
		this.props.logIn(username, password);
	}

	validateUsername() {
		const { username } = this.state;
		const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const solution = regex.test(username);
		this.setState({ isUsernameValid: solution });
	}

	validatePassword() {
		const { password } = this.state;
		const regex = /^$/;
		const solution = regex.test(password);
		this.setState({ isPasswordValid: solution });
	}

	render() {
		const { isUsernameValid, isPasswordValid, username, password } = this.state;
		const isFormValid = isUsernameValid && isPasswordValid && username && password;
		return (
			<KeyboardAvoidingView style={styles.container} behavior="padding">
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View style={[styles.container, { width }]}>
						<View style={[styles.formContainer, { height: height / 2.5 }]}>
							<BoldText style={styles.headerText}>Log In</BoldText>
							<FormInput
								type="primary"
								placeholder="Your username"
								onChangeText={username => {
									this.setState({ username });
									this.validateUsername();
								}}
								onBlur={() => this.validateUsername()}
								hasError={isUsernameValid ? false : true}
							/>
							<FormInput
								type="primary"
								placeholder="Your password"
								onChangeText={password => {
									this.setState({ password });
									this.validatePassword();
								}}
								onBlur={() => this.validatePassword()}
								hasError={isPasswordValid ? false : true}
							/>
							<Button
								type="primary"
								title="Log In"
								onPress={() => alert('Logging in...')}
								disabled={isFormValid ? false : true}
							/>
							<TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
								<BoldText style={{ fontSize: 18, textAlign: 'center' }}>{`Don't have an account?`}</BoldText>
							</TouchableOpacity>
						</View>
					</View>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		);
	}
}

// const mapDispatchToProps = dispatch => {

// }

// export default connect(null, mapDispatchToProps)(Login);
export default Login;
