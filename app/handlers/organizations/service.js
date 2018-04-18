const OrgModel = require('../../models/orgs');
const Bluebird = require('bluebird');

const queryOrg = async (query) => {
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
			return (err);
		}
		return orgs.map(({ name, type, city }) => ({name, type, city, dataSetType: 'org'}))
	});
};
	

const searchOrgs = async (query) => {
	try {
		const orgs = await queryOrg(query);
		return orgs;
	} catch (err) {
		return { err };
	}
};

module.exports = {
	searchOrgs,
};
