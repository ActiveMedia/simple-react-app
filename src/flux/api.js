import axios from 'axios';

export default class API {
	constructor( url ){
		this.URL = 'https://jsonplaceholder.typicode.com/';
	}

	_fetchPosts(){
		return axios.get( `${this.URL}posts/` );
	}
}