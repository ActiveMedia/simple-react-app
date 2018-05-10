import React, { Component } from 'react';

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
		if( posts != '' ){
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
										<li className="col-md-3">
											<img style={imageStyle} src={defaultImage} />
											<div class="mt-3 mb-3">
												<h5>{post.title}</h5>
											</div>
											<p>{post.body}</p>
										</li>
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