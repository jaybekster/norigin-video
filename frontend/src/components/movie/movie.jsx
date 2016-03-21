import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import * as movieActions from '../../actions/movie'

function mapStateToProps(state) {
    const { movie } = state;
    return {
        movie
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(movieActions, dispatch)
}

class Movie extends Component {
    componentDidMount() {
        this.props.loadMovie(this.props.params.movieId);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        const video = this.refs.video;

        if (this.props.params.movieId !== nextProps.params.movieId) {
            this.props.loadMovie(nextProps.params.movieId);
        }

        // stop downloading video to free network
        // @http://blog.pearce.org.nz/2010/11/how-to-stop-video-or-audio-element.html
        video && video.pause() && (video.src = '') && video.load();
    }

    render() {
        const movie = this.props.movie;

        return (
            <div>
            {
                Object.keys(movie).length > 2 &&
                <video className='movie__video' controls
                    poster={`/public/posters/${movie.images.placeholder}`}
                    ref='video'
                    qwer='asd'
                    key={movie.id}
                >
                    {movie.streams.map((stream, index) => (
                        <source src={stream.url}
                            type={`video/${stream.type}`}
                            key={`${movie.id}-${index}`}
                        />
                    ))}
                </video>
            }
            </div>
        )

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
