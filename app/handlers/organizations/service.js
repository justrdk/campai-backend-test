const OrgModel = require('../../models/orgs');

const queryOrg = query => new Promise((resolve, reject) => {
	OrgModel.find({
		$or: [{
			name: new RegExp(query, 'i'),
		}, {
			type: new RegExp(query, 'i'),
		}, {
			city: new RegExp(query, 'i'),
		}]
	}, 'name type city')
	.limit(3)
	.exec((err, orgs) => {
		if (err) {
			return reject(err);
		}
		return resolve(orgs);
	});
});
	

const searchOrgs = async (query) => {
	try {
		const orgs = await queryOrg(query);
		return orgs;
	} catch (err) {
		return err;
	}
};

module.exports = {
	searchOrgs,
};
