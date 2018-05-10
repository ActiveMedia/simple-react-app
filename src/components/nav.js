import React, { Component } from 'react';

export default class Nav extends Component {
	render(){
		return(
			<div>
				<nav className="nav">
					<div className="container">
						<div className="row">
							<div className="col-md-3 p-3">
								<a href="">Active Media React + API</a>
							</div>
							<div className="col-md-9 text-right p-3">
								<div className="btn-container pr-2">
									<a href="/" className="btn btn-dark">
										Fetch
									</a>
								</div>
								<div className="btn-container pr-2">
									<a href="/post" className="btn btn-dark">
										Post
									</a>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</div>
		)
	}
}