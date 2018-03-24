import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAWyKjhHy4ykHnfTTfNKpBdwUi3F_5tIg4'; // youtube key
//Create a component.
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
};

//Take above jsx component and add or render to the DOM
//
ReactDOM.render(<App />, document.querySelector('.container'));
