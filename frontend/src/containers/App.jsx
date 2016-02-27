import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import Movie from '../components/movies/movies';
import Movies from '../components/movies/movies';

export default React.createClass({
  render() {
    return (
        <div>
        	<Movie/>
        	<Movies/>
        </div>
    )
  }
});
