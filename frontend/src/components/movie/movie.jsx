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
        this.setState({
            isLoading: true
        });
        this.fetchData(nextProps.params.movieId);
    }

    renderVideo(data) {
        if (data) {
            return (
                <video className='movie__video' controls poster={`/public/posters/${this.state.data.images.placeholder}`}
                    key={data.id}
                >
                    {this.state.data.streams.map((stream, index) => (
                        <source src={stream.url}
                        type={`video/${stream.type}`}
                        key={`${this.state.data.id}-${index}`}/>
                    ))}
                </video>
            )
        }
    }

    render() {
        return (
            <div className={classNames('movie', {'movie_is-loading': this.state.isLoading})}>
                { this.renderVideo(this.state.data) }
            </div>
        )

    }
}

export default Movie;
