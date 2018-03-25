import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
		};
	}

	render() {
		return (
			<div className="search-bar">
				<input
					value={this.state.term} //when value of an element set by state, it is called controlled component.
					onChange={event => {
						this.onInputChange(event.target.value);
					}}
				/>
			</div>
		);
	}

	onInputChange(term) {
		this.setState({ term }); //change the state to current value;
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;
