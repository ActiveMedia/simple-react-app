import React, { Component } from 'react';

import axios from 'axios';

export default class PostForm extends Component {
	constructor(){
		super();

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	handleSubmit(event){
		axios.post( 'https://jsonplaceholder.typicode.com/posts', {
			title: this.state.title,
			body: this.state.body,
			userId: 1
		}).then(function (response) {
			var success = document.getElementById('success');
			success.setAttribute( 'style', 'display:block!important' );
			success.innerHTML = '<b>API RESPONSE</b><br><br>User ID: ' + response.data.userId + '<br> Post ID:' + response.data.id + '<br>Title: ' + response.data.title + '<br>Body: ' + response.data.body;
		});
		event.preventDefault();
	}
	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState({
		  [name]: value
		});
	  }
	render(){
		return(
			<div className="container app">
				<div className="row">
					<div class="col-md-6 offset-3 align-center">
						<p id="success" className="alert alert-success d-none"></p>
						<form onSubmit={this.handleSubmit}>
							<div class="form-group">
								<label for="title">Title</label>
								<input onChange={this.handleInputChange} type="text" name="title" class="form-control" id="title" placeholder="Title" />
							</div>
							<div class="form-group">
								<label for="body">Post Content</label>
								<textarea onChange={this.handleInputChange} type="text" class="form-control" id="body" name="body" placeholder="Post Content" />
							</div>
							<div class="form-group text-right">
								<input type="submit" class="btn btn-dark" id="body" />
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}