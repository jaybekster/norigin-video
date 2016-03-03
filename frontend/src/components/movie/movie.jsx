import React, { Component } from 'react';
import fetchApi from 'src/utils/fetchApi';
import classNames from 'classnames';

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        };
    }

    fetchData(movieId) {
        return fetchApi(`movies/${movieId}`).then((jsonData) => {
            this.setState({
                data: jsonData,
                isLoading: false
            });
        });
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        });
        this.fetchData(this.props.params.movieId)
    }

    componentWillReceiveProps(nextProps) {
        var video = this.refs.video;
        this.setState({
            isLoading: true
        });

        //stop downloading video to free network
        // @http://blog.pearce.org.nz/2010/11/how-to-stop-video-or-audio-element.html
        video.pause();
        video.src = '';
        video.load();

        this.fetchData(nextProps.params.movieId);
    }

    renderVideo(data) {
        if (data) {
            return (
                <video className='movie__video' controls
                    poster={`/public/posters/${this.state.data.images.placeholder}`}
                    ref='video'
                    key={data.id}
                >
                    {this.state.data.streams.map((stream, index) => (
                        <source src={stream.url}
                            type={`video/${stream.type}`}
                            key={`${this.state.data.id}-${index}`}
                        />
                    ))}
                </video>
            )
        }
    }

    render() {
        return (
            <div className={classNames('movie', {'movie_is-loading': this.state.isLoading})}>
                {this.renderVideo(this.state.data)}
            </div>
        )

    }
}

export default Movie;
