import React from 'react';
import { render } from 'react-dom';
import { Route, Router, browserHistory,  Redirect } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import configureStore from './store/configureStore'
import * as actions from './actions';
import * as reducers from './reducers';
import Movies from './components/movies-list/movies-list.jsx';
import Movie from './components/movie/movie.jsx';
import './app.scss';

const store = configureStore();

render(
    <Provider store={store}>
    	<Router history={browserHistory}>
            <Redirect from="/" to="movies" />
    		<Route name="movies" path='/movies' component={Movies}></Route>
    	</Router>
    </Provider>,
	document.querySelector('#app')
);
