import React, { Component } from 'react';
import { SafeAreaView, FlatList } from 'react-native';

import { NormalPost, ImagePost, ListEmptyComponent } from './components';
import { Feed as styles } from './styles';
import APIServices from '../../../APIServices';

class Feed extends Component {
	state = {
		loading: false,
		feed: [],
		page: 1,
		refreshing: false
	};

	loadFeed = async () => {
		const { page } = this.state;
		this.setState({ loading: true });
		try {
			// const data = await APIServices.FeedService.getFeed();
			// console.log(data);
			this.setState({
				loading: false
				// feed: page === 1 ? data.feed : [...this.state.feed, ...data.feed]
			});
		} catch (error) {
			this.setState({ loading: false });
			alert(error);
		}
	};

	async componentDidMount() {
		await this.loadFeed();
	}

	render() {
		const { refreshing } = this.state;
		return (
			<SafeAreaView style={styles.container}>
				<FlatList
					{...{ refreshing, ListEmptyComponent }}
					keyExtractor={post => post.id}
					renderItem={({ text, image }) => {
						if (!image) {
							return <NormalPost {...{ text }} />;
						}
						return <ImagePost {...{ image, text }} />;
					}}
					onRefresh={() => this.refreshFeed}
					onEndReached={() => this.loadMore}
					onEndReachedThreshold={10}
				/>
			</SafeAreaView>
		);
	}
}

export default Feed;
