const ContactsModel = require('../../models/contacts');
const mongoose = require('mongoose');
const Bluebird = require('bluebird');

const queryContacts = (query) => new Bluebird((resolve, reject) => {
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
			return reject(err);
		}
		return resolve(contacts.map(({ first_name, last_name, address: {city}, org, avatar}) =>
			({first_name, last_name, city, org, avatar, dataSetType: 'contact'})))
	});
});
	

const searchContacts = async (query) => {
	try {
		mongoose.connect('mongodb://localhost/campai');
		const contacts = await queryContacts(query);
		return contacts;
	} catch (err) {
		return Promise.reject({ err });
	} finally {
		mongoose.connection.close()
	}
};

module.exports = {
	searchContacts,
};
