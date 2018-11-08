import React, { Component, Fragment } from 'react';
// import { connect } from 'react-redux';
import { View, TouchableWithoutFeedback, TouchableOpacity, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { FormInput, Button, BoldText } from '../../../components';
import styles from '../styles';

const { height } = Dimensions.get('window');

class Email extends Component {
	state = {
		email: '',
		isEmailValid: true,
	}

	toNext() {
		this.props.navigation.navigate('Password'); // The screen name
	}

	validateEmail() {
		const { email } = this.state;
		const regex = /^$/;
		const solution = regex.test(email);
		this.setState({ isEmailValid: solution });
	}

	render() {
		const { email, isEmailValid } = this.state;
		const isFormValid = isEmailValid && email;
		return (
			<View style={styles.container}>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<Fragment>
						<TouchableOpacity style={styles.goBack} onPress={() => this.props.navigation.goBack()}>
							<Icon name='arrow-left' size={30} color='#000000' />
						</TouchableOpacity>
						<KeyboardAvoidingView behavior='padding' style={[styles.formContainer, { height: height / 3 }]}>
							<BoldText style={styles.headerText}>Your email address</BoldText>
							<FormInput
								type='primary'
								placeholder='Your email address'
								onChangeText={email => {
									this.setState({ email });
									this.validateEmail();
								}}
								onBlur={() => this.validateEmail()}
								hasError={isEmailValid ? false : true}
							/>
							<Button
								type='primary'
								title='Next'
								onPress={() => this.toNext()}
							// disabled={isFormValid ? false : true}
							/>
						</KeyboardAvoidingView>
					</Fragment>
				</TouchableWithoutFeedback>
			</View>
		);
	}
}

// const mapDispatchToProps = dispatch => {

// }

// export default connect(null, mapDispatchToProps)(Email);
export default Email;