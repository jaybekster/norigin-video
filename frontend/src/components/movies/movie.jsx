import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './movies.sass';

export default class MoviesMoview extends Component {
	render() {
		return (
			<li className='movies-movie'>
				<a href='#' className='movies-movie__link'>
					<span className='movies-movie__img-wrapper'>
						<img className='movies-movie__img'
							src={'/public/covers/' + this.props.images.cover}
							alt={this.props.title}
						/>
					</span>
					<span className='movies-movie__title'>{this.props.title}</span>
				</a>
			</li>
		)
	}
}
