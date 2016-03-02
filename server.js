const Hapi = require('hapi');
const Inert = require('inert');
const Path = require('path');
const movies = require('./movies.json');

const server = new Hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'frontend')
            }
        }
    }
});

server.connection({ port: 8888 });

server.register(Inert, () => {});

server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: '.',
            redirectToSlash: true,
        }
    }
});

server.route({
	method: 'GET',
	path: '/api/movies',
	handler: function(req, reply) {
		reply(movies.map(function(movie) {
            return {
                id: movie.id,
                title: movie.title,
                releaseYear: movie.meta.releaseYear,
                cover: movie.images.cover,
                description: movie.description,
                directors: movie.meta.directors.map((director) => director.name),
                actors: movie.meta.actors.map((actor) => actor.name)
            };
        }));
	}
});

server.route({
	method: 'GET',
	path: '/api/movies/{id}',
	handler: function(req, reply) {
		var movieId = req.params.id;
		if (movieId) {
			var moviesIds = movies.map((movie) => movie.id);
			if (moviesIds.length && moviesIds.indexOf(movieId) === -1 ) {
				return reply('No quote found.').code(404);
			}
			var filteredMovies = movies.filter(function(movie) {
				return movie.id === movieId;
			});

			if (filteredMovies.length) {
				return reply(filteredMovies[0]);
			}
			return reply(movies);
		}
		reply(movies);
	}
});

server.ext('onPreResponse', function(request, reply) {
    if (request.response.isBoom) {
        if (request.headers.accept.startsWith('text/html') || request.path.startsWith('/api')) {
            return reply.file('index.html');
        }
    }
    return reply.continue();
});

server.ext('onPostHandler', function(request, reply) {
    // forced delay before reponse to see how components load
    return reply(new Promise(function(resolve) {
        setTimeout(function() {
            resolve(request.response);
        }, 1500);
    }));
});

server.start((err) => {

    if (err) {
        throw err;
    }

    console.log('Server running at:', server.info.uri);
});
