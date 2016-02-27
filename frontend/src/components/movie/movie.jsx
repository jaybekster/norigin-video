import React, { Component } from 'react';
import { resolve } from "react-resolver";

class Movie extends Component {
    state = {}

    fetchData(movieId) {
        return fetch(`/api/movies/${movieId}`).then(function(response) {
          if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +  response.status);
                return;
            }
            return response.json();
        }).then((jsonData) => {
            this.setState({
                data: jsonData
            });
        }).catch(function(error) {
            console.log(error);
        });
    }

    componentWillMount() {
        this.fetchData(this.props.params.movieId);
    }

    componentWillReceiveProps(nextProps) {
        this.fetchData(nextProps.params.movieId);
    }

    render() {
        if (this.state.data) {
            return (
                <div className='movie'>
                    {this.state.data.id}
                    <video className='movie__video' controls poster={`/public/posters/${this.state.data.images.placeholder}`}>
                        {this.state.data.streams.map(stream => (
                            <source src={stream.url}
                            type={`video/${stream.type}`}/>
                        ))}
                    </video>
                </div>
            )
        } else {
            return (
                <div className='movie'></div>
            )
        }
    }
}

export default Movie
