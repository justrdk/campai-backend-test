const ContactsModel = require('../../models/contacts');

const queryContacts = query => new Promise((resolve, reject) => {
	ContactsModel.find({
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
	.exec((err, contacts) => {
		if (err) {
			return reject(err);
		}
		return resolve(contacts);
	});
});
	

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
