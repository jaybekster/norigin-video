const initialState = {
    movies: [],
    movie: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
    	case 'MOVIES_LOAD_SUCCESS':
    		return {
                ...state,
                movies: action.response
            };
        case 'MOVIE_LOAD_SUCCESS':
            return {
                ...state,
                movie: action.response
            };
		default:
			return state;
    }
    return state;
}
