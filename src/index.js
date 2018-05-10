import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Post from './Post';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

class SimpleApp extends React.Component {
	render(){
		return(
			<div>
				<BrowserRouter>
					<div>
						<Route exact path="/" component={App} />
						<Route exact path="/post" component={Post} />
					</div>
				</BrowserRouter>
			</div>
		)
	}
}

ReactDOM.render(<SimpleApp />, document.getElementById('root'));
registerServiceWorker();
