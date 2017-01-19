import Hapi from 'hapi';
import Inert from 'inert';
import Path from 'path';
import Good from 'good';

import BaseRouting from './baseRouting.js'

const port = 3000;

const server = new Hapi.Server({
	connections: {
		routes: {
			files: {
				/*relativeTo: Path.join(__dirname, 'public')*/
				relativeTo: Path.resolve(__dirname, '../public/')
			}
		}
	}
});

server.connection({ 
	port: port, 
	host: 'localhost' 
});


server.register(Inert, (err) => {
	if (err) {
		throw err;
	}

});

server.route(BaseRouting);

server.register({
	register: Good,
	options: {
		reporters: {
			console: [{
				module: 'good-squeeze',
				name: 'Squeeze',
				args: [{
					response: '*',
					log: '*'
				}]
			}, {
				module: 'good-console'
			}, 'stdout']
		}
	}
}, (err) => {
	if (err) {
		throw err;
	}

	server.start((err) => {
		if (err) {
			throw err;
		}
		server.log('info', 'Server running at: ' + server.info.uri);
	});
});

