import React, { Component, Fragment } from 'react';
// import { connect } from 'react-redux';
import {
	View,
	TouchableWithoutFeedback,
	TouchableOpacity,
	Keyboard,
	KeyboardAvoidingView,
	Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { FormInput, Button, BoldText } from '../../../components';
import styles from '../styles';

const { height, width } = Dimensions.get('window');

class Username extends Component {
	state = {
		username: '',
		isUsernameValid: true
	};

	toNext() {
		this.props.navigation.navigate('Email');
	}

	validateUsername() {
		const { username } = this.state;
		const regex = /^$/;
		const solution = regex.test(username);
		this.setState({ isUsernameValid: solution });
	}

	render() {
		const { username, isUsernameValid } = this.state;
		const isFormValid = isUsernameValid && username;
		return (
			<KeyboardAvoidingView style={styles.container} behavior="padding">
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View style={[styles.container, { width }]}>
						<Fragment>
							<TouchableOpacity style={styles.goBack} onPress={() => this.props.navigation.goBack()}>
								<Icon name="arrow-left" size={30} color="#000000" />
							</TouchableOpacity>
							<View style={[styles.formContainer, { height: height / 3 }]}>
								<BoldText style={styles.headerText}>Create a username</BoldText>
								<FormInput
									type="primary"
									placeholder="Choose a username"
									onChangeText={username => {
										this.setState({ username });
										this.validateUsername();
									}}
									onBlur={() => this.validateUsername()}
									hasError={isUsernameValid ? false : true}
								/>
								<Button
									type="primary"
									title="Next"
									onPress={() => this.toNext()}
									// disabled={isFormValid ? false : true}
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

// export default connect(null, mapDispatchToProps)(Login);
export default Username;
