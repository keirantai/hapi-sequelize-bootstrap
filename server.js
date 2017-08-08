'use strict';

const config = require('config').server;
const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection(config);

server.route({
	method: 'GET',
	path: '/',
	handler: (request, reply) => {
		reply({"msg": "Hello world!"});
	}
});

server.route(require('./routes/base_route').routes('Sample'));

server.start((err) => {
	if (err) {
		throw err;
	}

	console.log('Server running at: '+ server.info.uri);
});