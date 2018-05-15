import React, { Component } from 'react';

import GitHub from '../assets/logos/github.svg';
import Active from '../assets/logos/home-header-logo.svg';
const imageStyle = {
	height: '35px',
	marginLeft: '5px',
	marginRight: '5px'
}

export default class Footer extends Component {
	render(){
		return(
			<div className="container footer mb-4 mt-4">
				<div className="row">
					<div class="col-12 text-center">
						<a rel="noopener noreferrer" href="https://github.com/activemedia/" target="_blank">
							<img alt="GitHub" style={imageStyle} src={GitHub} />
						</a>
						<a rel="noopener noreferrer" href="https://activemedia.pt" target="_blank">
							<img alt="ActiveMedia" style={imageStyle} src={Active} />
						</a>
					</div>
				</div>
			</div>
		)
	}
}