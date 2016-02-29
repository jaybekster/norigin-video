import React from 'react';
import { render } from 'react-dom';
import { Route, Router, browserHistory,  Redirect } from 'react-router';
import Movies from './components/movies-list/movies-list.jsx';
import Movie from './components/movie/movie.jsx';
import './app.scss';

render(
	<Router history={browserHistory}>
        <Redirect from="/" to="movies" />
		<Route name="movies" path='/movies' component={Movies}>
			<Route path='/movies/:movieId' component={Movie}/>
        </Route>
	</Router>,
	document.querySelector('#app')
);
