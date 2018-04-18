const OrgModel = require('../../models/orgs');
const mongoose = require('mongoose');
const Bluebird = require('bluebird');

const queryOrg = (query) => new Bluebird((resolve, reject) => {
	const pattern = `.*${query}.*`
	OrgModel.find({
		name: {
			$regex: pattern,
			$options: 'i'
		},
		type: {
			$regex: pattern,
			$options: 'i'
		},
		city: {
			$regex: pattern,
			$options: 'i'
		}
	}, 'name type city')
	.limit(3)
	.exec((err, orgs) => {
		if (err) {
			return reject(err);
		}
		return resolve(orgs.map(({ name, type, city }) => ({name, type, city, dataSetType: 'org'})))
	});
});
	

const searchOrgs = async (query) => {
	try {
		mongoose.connect('mongodb://localhost/campai');
		const orgs = await queryOrg(query);
		return orgs;
	} catch (err) {
		return Promise.reject({
			err,
		});
	} finally {
		mongoose.connection.close()
	}
};

module.exports = {
	searchOrgs,
};
