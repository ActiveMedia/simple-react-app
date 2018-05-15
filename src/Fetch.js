import React from 'react';

import MainAPP from './components/main';

// API CLASS
import API from './flux/api';

export default class Fetch extends React.Component {
	constructor(){
		super();

		this.state = { list: '' }

		this._fetchData = this._fetchData.bind(this);

	}
	_fetchData(){
		const apiFetch = new API();
		apiFetch._fetchPosts().then( response => this.setState({ list: response.data }) );
	}
	render(){
		return(
			<div className="container app" id="theApp">
				<MainAPP _fetchData={this._fetchData} posts={this.state.list} />
			</div>
		)
	}
}