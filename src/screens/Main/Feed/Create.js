import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import APIService from '../../../APIServices';

import { TextArea } from '../../../components';
import { Create as styles } from './styles';

const { width, height } = Dimensions.get('window');

export default class Create extends Component {
	state = {
		text: ''
	};

	createPost = async () => {
		const { text } = this.state;
		try {
			const data = await APIService.PostService.createPost(text);
			this.setState({ success: !!data }); // Fake!
		} catch (error) {
			alert(error);
		}
	};

	render() {
		return (
			<View style={[styles.container, { width, height }]}>
				<TouchableOpacity style={styles.sendLink} onPress={() => this.createPost}>
					<Icon name="send" color="#000000" size={26} />
				</TouchableOpacity>
				<TextArea onChangeText={text => this.setState({ text })} placeholder="What's up?" />
			</View>
		);
	}
}
