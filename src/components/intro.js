import React, { Component } from 'react';

export default class ApiIntro extends Component {
	render(){
		return(
			<div className="container app">
				<div className="row">
					<div className="col-md-12 text-center mb-4">
						<h5>
							Simple React APP
						</h5>
					</div>
					<div className="col-md-6 mycontent-left">
						<p>
							This is a sample project as we are developing our skills in React integrating an API. For example, we could use the <a rel="noopener noreferrer" className="bold" href="https://developer.wordpress.org/rest-api/" target="_blank">WordPress Rest API</a>, but we are using the <a className="bold" href="https://jsonplaceholder.typicode.com/posts/1">JSON Placeholder API Project</a>.
						</p>
						<p>
							JSON Placeholder is <span class="italic bold">a fake online REST API for testing and Prototyping</span> as they define themselves. If you want to know more about this project <a href="https://github.com/typicode/jsonplaceholder#how-to">read more here</a>.
						</p>
						<p>
							We are also using <a rel="noopener noreferrer" className="bold" href="https://github.com/facebook/create-react-app">Create React App</a> as our boiler tempalte. <br />
							Create React App is a great tool to build react apps with no build configuration and also a easy tool to use to start learning React JS. <br/>
							Another great thing about this tool is that you don't need to install Babel or Webpack to start developing because they are preconfigured.
						</p>
					</div>
					<div className="col-md-6">
						<h6 className="bold">Here are some Documentation about the technogoly we are using here.</h6>
						<div className="text-left">
							<a rel="noopener noreferrer" className="btn btn-primary m-1" href="https://reactjs.org/docs/hello-world.html">
								REACT JS
							</a>
							<a rel="noopener noreferrer" className="btn btn-primary m-1" href="https://github.com/axios/axios">
								AXIOS
							</a>
							<a rel="noopener noreferrer" className="btn btn-primary m-1" href="https://getbootstrap.com/docs/4.0/getting-started/introduction/">
								BOOTSTRAP 4
							</a>
							<a rel="noopener noreferrer" className="btn btn-primary m-1" href="https://github.com/facebook/create-react-app">
								Create React App
							</a>
							<a rel="noopener noreferrer" className="btn btn-primary m-1" href="https://github.com/ReactTraining/react-router">
								React Router
							</a>
						</div>
						<hr />
						<div>
							
						</div>
					</div>
				</div>
			</div>
		)
	}
}