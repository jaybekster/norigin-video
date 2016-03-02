import React, { Component } from 'react';
import Movie from './movies-item';
import fetchApi from 'src/utils/fetchApi';

export default class Movies extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [],
			children: ''
		}
	}

	componentDidMount() {
		fetchApi('movies').then((jsonData) => {
			this.setState({
				movies: jsonData
			});
		});
	}

	render() {
		return (
			<div className='movies-wrapper'>
				<ul className='movies-list'>
					{this.state.movies.map((movie) => <Movie {...movie} key={movie.id}/>)}
				</ul>
				{this.props.children || 'Choose a movie'}
			</div>
		)
	}
}
