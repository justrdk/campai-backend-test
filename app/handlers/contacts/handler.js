const contactsService = require('./service');

const searchContacts = async (request) => {
	const { query } = request;
	const { search } = query;
	try {
		const results = await contactsService.searchContacts(search);
		return results;
	} catch (err) {
		return err;
	}
};

module.exports = searchContacts;
