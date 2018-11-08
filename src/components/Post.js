import * as React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Palette from './Palette';

const { black, red, white } = Palette;

export const NormalPost = ({ name, username, text, likes, comments, liked, toggleLike, onCommentPress } = {}) => (
	<View style={{ width: '100%', borderRadius: 5, padding: 10, borderWidth: 0.5, borderColor: '#000000', flexDirection: 'column' }}>
		<Text style={{ fontWeight: '500', marginBottom: 10 }}>{name} · @{username}</Text>
		<Text styles={{ marginBottom: 10 }}>{text}</Text>
		<View style={{ width: '30%', flexDirection: 'row', alignSelf: 'flex-end', justifyContent: 'space-between' }}>
			<TouchableOpacity onPress={toggleLike} style={{ flexDirection: 'row', justifyContent: 'space-between', width: '33.33%' }}>
				<Icon name='heart' size={15} color={liked ? red : black} />
				<Text>{likes.length}</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={onCommentPress} style={{ flexDirection: 'row', justifyContent: 'space-between', width: '33.33%' }}>
				<Icon name='message-circle' size={15} color={black} />
				<Text>{comments.length}</Text>
			</TouchableOpacity>
			<Icon name='share' size={15} color={black} />
		</View>
	</View>
);

// Get the type of image - light or dark.
export const ImagePost = ({ name, username, path, image, text, likes, comments, liked, toggleLike, onCommentPress } = {}) => (
	<ImageBackground style={{ width: '100%', height: 400, borderRadius: 5, padding: 10, borderWidth: 0.5, borderColor: '#000000', flexDirection: 'column' }} source={image}>
		<Text style={{ fontWeight: '500', marginBottom: 10, color: white }}>{name} · @{username}</Text>
		<Text style={{ marginBottom: 10, color: white }}>{text}</Text>
		<View style={{ width: '35%', flexDirection: 'row', alignSelf: 'flex-end', justifyContent: 'space-between' }}>
			<React.Fragment>
				<Icon name='heart' size={15} color={liked ? red : white} />
				<Text style={{ color: white }}>{likes.length}</Text>
			</React.Fragment>
			<React.Fragment>
				<Icon name='message-circle' size={15} color={white} />
				<Text style={{ color: white }}>{comments.length}</Text>
			</React.Fragment>
			<Icon name='share' size={15} color={white} />
		</View>
	</ImageBackground>
);