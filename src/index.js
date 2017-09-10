import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyAl444EhyNRqCsB_N92fjuRMaOWxgAl4j8';

YTSearch({key:API_KEY,term:'Sri Lanka'},function(data){
	console.log(data);
});

//Create a  new react component. This component should produce some html
class App extends Component{
	constructor(props) {
		super(props);
		this.state ={videso:[]}
	}

	render(){
		return(<div>
			<SearchBar/>
		</div>);
	}
}

ReactDOM.render(<App />,document.querySelector(".container"));