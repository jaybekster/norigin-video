import { createStore, combineReducers, applyMiddleware } from 'redux';
import logging from './middleware/logging';
import fetching from './middleware/fetching';
import * as reducers from '../reducers';

export let store = applyMiddleware(logging, fetching)(createStore)(combineReducers(reducers));
