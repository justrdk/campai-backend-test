const organizationsService = require('../organizations/service');
const contactsService = require('../contacts/service');
const contactGroupsService = require('../contactgroups/service');

const searchOrganizations = async (request) => {
	const { query } = request;
	const { search } = query;
	try {
		const orgs = await organizationsService.searchOrgs(search);
		const contacts = await contactsService.searchContacts(search);
		const contactGroups = await contactGroupsService.searchContactGroups(search);
		return [].concat.apply([], [orgs, contacts, contactGroups])
	} catch (err) {
		console.log('err', err);
		return err;
	}
};

module.exports = searchOrganizations;