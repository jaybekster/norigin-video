const initialState = [];

export default function(state = initialState, action) {
    switch (action.type) {
    	case 'MOVIES':
    		return {
    			...state,
    			movies: []
    		};
		default:
			return state;
    }
    return state;
}
