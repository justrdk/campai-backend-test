const ContactGroupsModel = require('../../models/contactgroups');
const Bluebird = require('bluebird');

const queryContactGroup = async (query) => {
	const pattern = `.*${query}.*`
	ContactGroupsModel.find({
		name: {
			$regex: pattern,
			$options: 'i'
		}
	}, 'name city')
	.limit(3)
	.exec((err, contactgroups) => {
		if (err) {
			return err;
		}
		return contactgroups.map(({ name, city }) => ({ name, city, dataSetType: 'contactgroup' }))
	});
};
	

const searchContactGroups = async (query) => {
	try {
		const contactgroups = await queryContactGroup(query);
		return contactgroups
	} catch (err) {
		return { err };
	}
};

module.exports = {
	searchContactGroups,
};
