export function loadMovie(movieId) {
    return {
        fetching: fetch(`/api/movies/${movieId}`).then((response) => response.json()),
        types: ['MOVIE_LOAD', 'MOVIE_LOAD_SUCCESS', 'MOVIE_LOAD_FAIL']
    }
}
