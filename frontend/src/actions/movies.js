export function loadMovies() {
    return {
        fetching: fetch('/api/movies')
            .then(response => response.json()),
        types: ['MOVIES_LOAD', 'MOVIES_LOAD_SUCCESS', 'MOVIES_LOAD_FAIL']
    };
}
