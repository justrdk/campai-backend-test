const orgHandler = require('../handlers/organizations/handler');

module.exports = [{
	method: 'GET',
	path: '/orgs',
	options: {
		handler: orgHandler,
	},
}];
