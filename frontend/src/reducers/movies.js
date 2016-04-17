const initialState = [];

export default function movies(state = initialState, action) {
    switch (action.type) {
        case 'MOVIES_LOAD_SUCCESS':
            return action.response;
    }
    return state;
}
