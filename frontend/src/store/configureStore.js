import { createStore, combineReducers, applyMiddleware } from 'redux';
import logging from './middleware/logging';
import fetching from './middleware/fetching';
import moviesReducer from '../reducers';

let rootReducer = combineReducers({moviesReducer});

export default function configureStore(initialState) {
    return applyMiddleware(fetching)(createStore)(rootReducer, initialState);
}
