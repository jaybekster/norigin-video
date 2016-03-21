import { createStore, applyMiddleware } from 'redux';
import logging from './middleware/logging';
import fetching from './middleware/fetching';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    return applyMiddleware(fetching)(createStore)(rootReducer, initialState);
}
