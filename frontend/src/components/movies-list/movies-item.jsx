import React, { Component, PropTypes } from 'react';
import Tooltip from '../tooltip/tooltip';

export default class MoviesItem extends Component {
	static contextTypes = {
    	router: PropTypes.object
	}

	goToLink(e) {
		e.preventDefault();
		this.context.router.push(`/movies/${this.props.id}`)
	}

	render() {
		return (
			<li className='movies-item'>
				<a href="#" className='movies-item__link' onClick={this.goToLink.bind(this)} title={this.props.description}>
					<span className='movies-item__img-wrapper'>
						<img
							className='movies-item__img'
							src={'/public/covers/' + this.props.cover}
							alt={this.props.title}
						/>
					</span>
					<span className='movies-item__title'>{this.props.title}</span>
				</a>
			</li>
		)
	}
}
