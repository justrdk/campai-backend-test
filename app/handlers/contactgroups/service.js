const ContactGroupsSchema = require('../../models/contactgroups');
const mongoose = require('mongoose');
const Bluebird = require('bluebird');

const queryContactGroup = (query) => new Bluebird((resolve, reject) => {
	const ContactGroupsModel = mongoose.model('contactgroups', ContactGroupsSchema);
	ContactGroupsModel.find({
		$text: {
			$search: `\"${query}\"`
		}
	}, 'name city')
	.limit(3)
	.exec((err, contactgroups) => {
		if (err) {
			return reject(err);
		}
		return resolve(contactgroups.map(({ name, city }) => ({ name, city, dataSetType: 'contactgroup' })))
	});
});
	

const searchContactGroups = async (query) => {
	try {
		mongoose.connect('mongodb://localhost/campai');
		const contactgroups = await queryContactGroup(query);
		return Promise.resolve(contactgroups);
	} catch (err) {
		return Promise.reject({ err });
	} finally {
		mongoose.connection.close()
	}
};

module.exports = {
	searchContactGroups,
};
