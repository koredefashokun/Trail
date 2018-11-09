import React, { Component, Fragment } from 'react';
// import { connect } from 'react-redux';
import {
	View,
	TouchableWithoutFeedback,
	Keyboard,
	KeyboardAvoidingView,
	Dimensions,
	TouchableOpacity
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/Feather';

import { FormInput, Button, BoldText } from '../../../components';
import styles from '../styles';

const { height, width } = Dimensions.get('window');

class Name extends Component {
	state = {
		firstName: '',
		lastName: '',
		isFirstNameValid: true,
		isLastNameValid: true
	};

	toNext() {
		this.props.navigation.navigate('Username'); // The screen name
	}

	validateFirstName() {
		const { firstName } = this.state;
		const regex = /^$/;
		const solution = regex.test(firstName);
		this.setState({ isFirstNameValid: solution });
	}

	validateLastName() {
		const { lastName } = this.state;
		const regex = /^$/;
		const solution = regex.test(lastName);
		this.setState({ isLastNameValid: solution });
	}

	render() {
		const { firstName, lastName, isFirstNameValid, isLastNameValid } = this.state;
		const isFormValid = isFirstNameValid && isFirstNameValid && lastName && firstName;
		return (
			<KeyboardAvoidingView style={styles.container} behavior="padding">
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View style={[styles.container, { width }]}>
						<Fragment>
							<TouchableOpacity
								style={styles.goBack}
								onPress={() =>
									this.props.navigation.navigate('Login', {}, NavigationActions.navigate({ routeName: 'Login' }))
								}>
								<Icon name="arrow-left" size={30} color="#000000" />
							</TouchableOpacity>
							<View style={[styles.formContainer, { height: height / 3 }]}>
								<BoldText style={styles.headerText}>Your name</BoldText>
								<FormInput
									type="primary"
									placeholder="Your first name"
									onChangeText={firstName => {
										this.setState({ firstName });
										this.validateFirstName();
									}}
									onBlur={() => this.validateFirstName()}
									hasError={isFirstNameValid ? false : true}
								/>
								<FormInput
									type="primary"
									placeholder="Your last name"
									onChangeText={lastName => {
										this.setState({ lastName });
										this.validateLastName();
									}}
									onBlur={() => this.validateLastName()}
									hasError={isLastNameValid ? false : true}
								/>
								<Button
									type="primary"
									title="Next"
									onPress={() => this.props.navigation.navigate('Username')}
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

// export default connect(null, mapDispatchToProps)(Name);
export default Name;
