const ContactsModel = require('../../models/contacts');
const Bluebird = require('bluebird');

const queryContacts = async (query) => {
	const pattern = `.*${query}.*`
	ContactsModel.find({
		first_name: {
			$regex: pattern,
			options: 'i',
		},
		last_name: {
			$regex: pattern,
			options: 'i',
		},
		'org.name': {
			$regex: pattern,
			options: 'i',
		},
	}, 'first_name last_name address.city org avatar')
	.populate('org')
	.limit(3)
	.exec((err, contacts) => {
		if (err) {
			return err;
		}
		return contacts.map(({ first_name, last_name, address: {city}, org, avatar}) =>
			({first_name, last_name, city, org, avatar, dataSetType: 'contact'}))
	});
};
	

const searchContacts = async (query) => {
	try {
		const contacts = await queryContacts(query);
		return contacts;
	} catch (err) {
		return { err };
	}
};

module.exports = {
	searchContacts,
};
