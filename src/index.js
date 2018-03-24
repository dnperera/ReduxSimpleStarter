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
		this.state = { videos: [] };

		//load default videos using YTSearch
		YTSearch({ key: API_KEY, term: 'Sri Lanka' }, videos => {
			this.setState({ videos }); // this.setState({videos:videos})
		});
	}
	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.videos[0]} />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

//Take above jsx component and add or render to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
