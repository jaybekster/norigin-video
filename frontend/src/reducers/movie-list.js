export default function (state = {}, action) {
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