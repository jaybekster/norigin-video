import React from 'react';
import { render } from 'react-dom';
import { Route, Router, hashHistory } from 'react-router';
import * as containers from './containers';

const {
	Movies,
	App
} = containers;

render(
	<Router history={hashHistory}>
		<Route path='/' component={App}>
			<Route path='/movie/:movieid'/>
        </Route>
	</Router>,
	document.querySelector('#app')
);
