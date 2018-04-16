const contactGroupsHandler = require('../handlers/contactgroups/handler');

module.exports = [{
	method: 'GET',
	path: '/contactgroups',
	options: {
		handler: contactGroupsHandler,
	},
}];
