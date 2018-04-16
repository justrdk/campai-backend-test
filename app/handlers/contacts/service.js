const ContactsSchema = require('../../models/contacts');
const OrgSchema = require('../../models/orgs');
const mongoose = require('mongoose');
const Bluebird = require('bluebird');

const queryContacts = (query) => new Bluebird((resolve, reject) => {
	const ContactsModel = mongoose.model('contacts', ContactsSchema);
	const OrgModel = mongoose.model('orgs', OrgSchema);
	ContactsModel.find({
		$text: {
			$search: `\"${query}\"`
		}
	}, 'first_name last_name address.city org')
	.populate('org')
	.exec((err, contacts) => {
		if (err) {
			return reject(err);
		}
		return resolve(contacts)
	});
});
	

const searchContacts = async (query) => {
	try {
		mongoose.connect('mongodb://localhost/campai');
		const contacts = await queryContacts(query);
		return Promise.resolve({ contacts });
	} catch (err) {
		return Promise.reject({ err });
	} finally {
		mongoose.connection.close()
	}
};

module.exports = {
	searchContacts,
};
