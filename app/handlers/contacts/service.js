const ContactsModel = require('../../models/contacts');

const queryContacts = query => ContactsModel.find({
		$or: [{
			first_name: new RegExp(query, 'i'),
		}, {
			last_name: new RegExp(query, 'i'),
		}, {
			'org.name': new RegExp(query, 'i'),
		}]
	}, 'first_name last_name address.city org avatar')
	.populate('org')
	.limit(3)
	.exec();

const searchContacts = async (query) => {
	try {
		const contacts = await queryContacts(query);
		return contacts;
	} catch (err) {
		return err;
	}
};

module.exports = {
	searchContacts,
};
