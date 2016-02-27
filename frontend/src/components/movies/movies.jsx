import React, { Component, PropTypes } from 'react';
import Movie from './movie';

export default class Movies extends Component {
	state = {
		movies: [],
		children: ''
	}

	componentDidMount() {
		fetch('/api/movies').then((response) => {
			if (response.status !== 200) {
			 	console.log('Looks like there was a problem. Status Code: ' +  response.status);
	        	return;
	      	}
	      	return response.json();
		}).then((jsonData) => {
			console.log(jsonData.length)
			this.setState({
				movies: jsonData
			});
		}).catch(function(error) {
			console.log(error);
		});
	}

	render() {
		return (
			<div>
				{this.props.children}
				<ul className='movies'>
					{this.state.movies.map((movie) => <Movie {...movie} key={movie.id}/>)}
				</ul>
			</div>
		)
	}
}
