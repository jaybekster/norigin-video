import React, { Component } from 'react';
import Movie from './movies-item';
import * as moviesActions from '../../actions/movies';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	const { movies } = state;
	return {
		movies
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(moviesActions, dispatch);
}

class Movies extends Component {
	componentDidMount() {
		this.props.loadMovies();
	}

	render() {
		return (
			<div className='movies-wrapper'>
				<ul className='movies-list'>
					{this.props.movies.map((movie) => <Movie {...movie} key={movie.id}/>)}
				</ul>
				{this.props.children || 'Choose a movie'}
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
