import { combineReducers } from 'redux';
import movies from './movies';
import movie from './movie'

var rootReducer = combineReducers({
    movies,
    movie
});

export default rootReducer;
