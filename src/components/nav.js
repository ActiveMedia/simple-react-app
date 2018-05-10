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
									<button onClick={this.props._fetchData} className="btn btn-dark">
										Fetch Data
									</button>
								</div>
								<div className="btn-container pr-2">
									<button className="btn btn-dark">
										Post Data
									</button>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</div>
		)
	}
}