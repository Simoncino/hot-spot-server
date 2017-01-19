const basedir = '../public';

module.exports = [
	{ 
		method: 'GET', 
		path: '/', 
		handler: function (request, reply) {
			const result = {
				"success":true
				,"status":"A cannone!"
			};
			reply(result);
		} 
	}
	,{ 
		method: 'GET', 
		path: '/home', 
		handler: function (request, reply) {
			reply.file(basedir + '/sima.html');
		} 
	}
	,{ 
		method: 'GET', 
		path: '/img/{name}', 
		handler: function (request, reply) {
			reply.file(basedir + "/img/" + request.params.name);
		} 
	}
	,{ 
		method: 'GET', 
		path: '/css/{name}', 
		handler: function (request, reply) {
			reply.file(basedir + "/css/" + request.params.name);
		} 
	}
];


/*****DA UTILIZZARE IN SEGUITO START****/
/*
var cart = require('./cart');
var user = require('./user');

module.exports = [].concat(cart, user);
*/
/*****DA UTILIZZARE IN SEGUITO END******/