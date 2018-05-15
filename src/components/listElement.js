import React from 'react';

export default class List extends React.Component {
	render(){
		return (
			<li className="col-md-3">
				<img alt={this.props.title} style={this.props.elementStyle} src={this.props.image} />
				<div class="mt-3 mb-3">
					<h5>{this.props.title}</h5>
				</div>
				<p>{this.props.body}</p>
			</li>
		)
	}
}