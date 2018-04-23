const ContactGroupsModel = require('../../models/contactgroups');

const queryContactGroup = query => ContactGroupsModel.find({
		name: new RegExp(query, 'i'),
	}, 'name address.city')
	.limit(3)
	.exec()

const searchContactGroups = async (query) => {
	try {
		const contactgroups = await queryContactGroup(query);
		return contactgroups;
	} catch (err) {
		return err;
	}
};

module.exports = {
	searchContactGroups,
};
