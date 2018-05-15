import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Post from './Post';
import Fetch from './Fetch';

import Nav from './components/nav';
import Footer from './components/footer';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

class SimpleApp extends React.Component {
	render(){
		return(
			<div>
				<Nav />
				<BrowserRouter basename={'/simple-react-app'}>
					<div>
						<Route exact path="/" component={App} />
						<Route exact path="/post" component={Post} />
						<Route exact path="/fetch" component={Fetch} />
					</div>
				</BrowserRouter>
				<Footer />
			</div>
		)
	}
}

ReactDOM.render(<SimpleApp />, document.getElementById('root'));
registerServiceWorker();