import fetchApi from 'src/utils/fetchApi';

export function getMovies() {
	return {
		fetching: fetch('/api/movies')
            .then(response => response.json()),
		types: ['MOVIES_LOAD', 'MOVIES_LOAD_SUCCESS', 'MOVIES_LOAD_FAIL']
	};
};
