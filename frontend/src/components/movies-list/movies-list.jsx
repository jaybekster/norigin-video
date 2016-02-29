import React, { Component } from 'react';
import Movie from './movies-item';

export default class Movies extends Component {
	constructor(props) {
		super();
		this.state = {
			movies: [],
			children: ''
		}
	}

	componentDidMount() {
		fetch('/api/movies').then((response) => {
			if (response.status !== 200) {
			 	console.log('Looks like there was a problem. Status Code: ' +  response.status);
	        	return;
	      	}
	      	return response.json();
		}).then((jsonData) => {
			this.setState({
				movies: jsonData
			});
		}).catch(function(error) {
			console.log(error);
		});
	}

	render() {
		return (
			<div className='movies-wrapper'>
				<ul className='movies-list'>
					{this.state.movies.map((movie) => <Movie {...movie} key={movie.id}/>)}
				</ul>
				{this.props.children}
			</div>
		)
	}
}
