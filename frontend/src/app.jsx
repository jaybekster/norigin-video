import React from 'react';
import { render } from 'react-dom';
import { Route, Router, browserHistory,  Redirect } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { store } from './store/configureStore'
import * as actions from './actions';
import * as reducers from './reducers';
import Movies from './components/movies-list/movies-list.jsx';
import Movie from './components/movie/movie.jsx';
import './app.scss';

store.subscribe(() => {
    console.log('store has need update: ', store.getState());
});

store.dispatch(actions.getMovies());

render(
	<Router history={browserHistory}>
        <Redirect from="/" to="movies" />
		<Route name="movies" path='/movies' component={Movies}>
			<Route path='/movies/:movieId' component={Movie}/>
        </Route>
	</Router>,
	document.querySelector('#app')
);
