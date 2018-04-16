const contactGroupsService = require('./service');

const searchContactGroups = async (request) => {
	const { query } = request;
	const { search } = query;
	try {
		const results = await contactGroupsService.searchContactGroups(search);
		return results;
	} catch (err) {
		return err;
	}
};

module.exports = searchContactGroups;
