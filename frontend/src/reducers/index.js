const initialState = {
	movies: []
};

export default function(state = initialState, action) {
    switch (action.type) {
    	case 'MOVIES':
    		return {
                ...state,
                movies: [...state.movies, state.movies.length + 1]
            };
            break;
		default:
			return state;
    }
}