import fetchApi from 'src/utils/fetchApi';

export function getMovies(data, action) {
	return function (dispatch) {
        setTimeout(function () {
        	console.log(timeout);
            dispatch({
                type: 'MOVIES',
                message
            })
        }, 2000);
    };
	// return function (dispatch) {
	// 	console.log(dispatch)
	// 	fetchApi('movies').then(response => {
 //        	dispatch({
 //        		type: 'MOVIES',
 //        		asd: 12
 //        	});
 //        });
 //    }
	// return {
	// 	data: state
	// 	type: 'MOVIES'
	// };
};