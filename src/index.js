import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAWyKjhHy4ykHnfTTfNKpBdwUi3F_5tIg4'; // youtube key

//Create a class base component.
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null,
		};
		this.videoSearch('Anuradhapura');
	}

	videoSearch(term) {
		if (term.length > 0) {
			//load default videos using YTSearch
			YTSearch({ key: API_KEY, term: term }, videos => {
				this.setState({
					videos: videos,
					selectedVideo: videos[0],
				});
			});
		}
	}

	render() {
		//Add throttling to search video for 0.4s
		const videoSearch = _.debounce(term => {
			this.videoSearch(term);
		}, 400);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					videos={this.state.videos}
					onVideoSelect={selectedVideo => {
						this.setState({ selectedVideo });
					}}
				/>
			</div>
		);
	}
}

//Take above jsx component and add or render to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
