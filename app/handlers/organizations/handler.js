const organizationsService = require('./service');

const searchOrganizations = async (request) => {
	const { query } = request;
	const { search } = query;
	try {
		const results = await organizationsService.searchOrgs(search);
		return results;
	} catch (err) {
		return err;
	}
};

module.exports = searchOrganizations;
