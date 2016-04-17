const initialState = {
    id: 0,
    images: {},
    streams: [],
    isLoading: false
};

export default function movie(state = initialState, action) {
    switch (action.type) {
        case 'MOVIE_LOAD':
            return {
                ...action,
                isLoading: true
            };
        case 'MOVIE_LOAD_SUCCESS':
            return {
                ...action.response,
                isLoading: false
            };
        case 'MOVIE_LOAD_FAIL':
            return {
                isLoading: false
            };
    }
    return state;
}
