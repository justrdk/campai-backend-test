const ContactGroupsModel = require('../../models/contactgroups');

const queryContactGroup = query => new Promise((resolve, reject) => {
	ContactGroupsModel.find({
		name: new RegExp(query, 'i'),
	}, 'name address.city')
	.limit(3)
	.exec((err, contactgroups) => {
		if (err) {
			return reject(err);
		}
		return resolve(contactgroups);
	});
});
	

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
