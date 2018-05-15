import React, { Component } from 'react';

import List from './listElement';

import defaultImage from '../assets/images/default.png';
import { shuffle } from '../flux/functions';
const imageStyle = {
	width: '100%',
	heigth: 'auto',
}


export default class MainAPP extends Component {
	constructor(){
		super();

		this.state = { posts: '' };
	}
	componentDidMount(){
		this.setState({ posts: this.props.posts });
	}
	render(){
		const posts = this.props.posts;
		shuffle( posts );
		if( posts !== '' ){
			return(
				<div className="container" id="theApp">
					<div className="row">
						<div className="col-md-12 text-center mb-4 mt-4">
							<h5>
								The APP
							</h5>
						</div>
						<div className="col-md-12" id="data-container">
							<ul className="row">
								{
									posts.slice(0, 8).map(( post, index ) => (
										<List title={post.title} body={post.body} image={defaultImage} elementStyle={imageStyle} />
									))
								}
							</ul>
						</div>
					</div>
				</div>
			)
		} else {
			return (
				<div className="container" id="theApp">
					<div className="row">
						<div className="col-md-12 text-center mb-4 mt-4">
							<button onClick={this.props._fetchData} className="btn btn-dark">
								Fetch Data
							</button>
						</div>
						<div className="col-md-12 text-center" id="data-container">
							Click on the Fetch Button to get data from the API! :)
						</div>
					</div>
				</div>
			)
		}
	}
}