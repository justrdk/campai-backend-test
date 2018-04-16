const contactsHandler = require('../handlers/contacts/handler');

module.exports = [{
	method: 'GET',
	path: '/contacts',
	options: {
		handler: contactsHandler,
	},
}];
