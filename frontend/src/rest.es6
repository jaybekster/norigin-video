import 'isomorphic-fetch';
import reduxApi, {transformers} from 'redux-api';
import adapterFetch from 'redux-api/lib/adapters/fetch';
export default reduxApi({
   // complex endpoint description
  movies: {
    url: '/movies',
    // reimplement default `transformers.object`
    transformer: transformers.array,
    // base endpoint options `fetch(url, options)`
    options: {
      header: {
        "Accept": "application/json"
      }
    }
  },
  movie: {
    url: '/movie/:id'
  }
}).use("fetch", adapterFetch(fetch)); // it's necessary to point using REST backend
