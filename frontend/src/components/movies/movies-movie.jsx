import React, { Component, PropTypes } from 'react';

export default class MoviesMoview extends Component {
	static contextTypes = {
    	router: PropTypes.object
	}

	goToLink(e) {
		e.preventDefault();
		this.context.router.push(`/movies/${this.props.id}`)
	}

	render() {
		return (
			<li className='movies-movie'>
				<a href="#" className='movies-movie__link' onClick={this.goToLink.bind(this)}>
					<span className='movies-movie__img-wrapper'>
						<img
							className='movies-movie__img'
							src={'/public/covers/' + this.props.cover}
							alt={this.props.title}
						/>
					</span>
					<span className='movies-movie__title'>{this.props.title}</span>
				</a>
			</li>
		)
	}
}
