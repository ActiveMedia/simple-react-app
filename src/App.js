import React, { Component } from 'react';
import axios from 'axios';

// API CLASS
import API from './flux/api';

// Components
import Nav from './components/nav';
import Footer from './components/footer';
import ApiIntro from './components/intro';
import MainAPP from './components/main';

class App extends Component {
	constructor(props){
		super(props);

		this.state = { list: '' }

		this._fetchData = this._fetchData.bind(this);

	}
	_fetchData(){
		const apiFetch = new API;
		apiFetch._fetchPosts().then( response => this.setState({ list: response.data }) );
		var target = document.getElementById("theApp");
	}
	render() {
		return(
			<div>
				<Nav />
				<ApiIntro />
				<MainAPP _fetchData={this._fetchData} posts={this.state.list} />
				<Footer />
			</div>
		)
	}
}

export default App;
