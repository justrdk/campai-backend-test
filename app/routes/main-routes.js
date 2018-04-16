const searchAllHandler = require('../handlers/searchAll/handler');

module.exports = [{
	method: 'GET',
	path: '/all',
	options: {
		handler: searchAllHandler,
	},
}];
