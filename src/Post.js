import React, { Component } from 'react';

// Components
import Nav from './components/nav';
import PostForm from './components/postForm';

class Post extends Component {
	render() {
		return(
			<div>
				<Nav/>
				<PostForm />
			</div>
		)
	}
}

export default Post;