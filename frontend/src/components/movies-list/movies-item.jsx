import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Tooltip from '../tooltip/tooltip';

export default class MoviesItem extends Component {
	static contextTypes = {
    	router: PropTypes.object
	}

	constructor(props) {
		super(props);
		this.state = {
			hovered: false
		};
	}

	onMouseEnter() {
		this.setState({
			hovered: true
		});
	}

	onMouseLeave() {
		this.setState({
			hovered: false
		});
	}

	render() {
		let directors,
			actors;

		if (this.props.directors.length) {
			directors = <dd>{this.props.directors.join(', ')}.</dd>
		}

		if (this.props.actors.length) {
			actors = <dd>{this.props.actors.join(', ')}.</dd>
		}

		return (
			<li className='movies-item'>
				<Link to={`/movies/${this.props.id}`} className='movies-item__link'
					onMouseEnter={this.onMouseEnter.bind(this)}
					onMouseLeave={this.onMouseLeave.bind(this)}
				>
					<span className='movies-item__img-wrapper'>
						<img
							className='movies-item__img'
							src={'/public/covers/' + this.props.cover}
							alt={this.props.title}
						/>
					</span>
					<span className='movies-item__title'>{this.props.title}</span>
					<Tooltip ref='tooltip' isVisible={this.state.hovered}>
						<div className='movies-item__tooltip'>
							{directors || actors ?
								<dl>
									{ directors && <dt>Directors</dt> }
									{directors}
									{actors && <dt>Actors</dt>}
									{actors}
								</dl> :
							''}
							<div className="movie-item-description">
								{this.props.description}
							</div>
						</div>
					</Tooltip>
				</Link>
			</li>
		)
	}
}
