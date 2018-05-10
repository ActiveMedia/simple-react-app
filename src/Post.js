import React, { Component } from 'react';

// Components
import Nav from './components/nav';
import PostForm from './components/postForm';
import Footer from './components/footer';

class Post extends Component {
	render() {
		return(
			<div>
				<Nav/>
				<PostForm />
				<Footer />
			</div>
		)
	}
}

export default Post;