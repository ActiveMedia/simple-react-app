import React, { Component } from 'react';
import logo from './logo.svg';

import API from './flux/api';

// Components
import Nav from './components/nav';
import ApiIntro from './components/intro';
import MainAPP from './components/main';

import axios from 'axios';

class App extends Component {
	constructor(props){
		super(props);

		this.state = { list: '' }

		this._fetchData = this._fetchData.bind(this);

	}
	_fetchData(){
		const apiFetch = new API;
		apiFetch._fetchPosts().then( response => this.setState({ list: response.data }) );

		this.forceUpdate();
	}
	render() {
		return(
			<div>
				<Nav _fetchData={this._fetchData} />
				<ApiIntro />
				<MainAPP posts={this.state.list} />
			</div>
		)
	}
}

export default App;
