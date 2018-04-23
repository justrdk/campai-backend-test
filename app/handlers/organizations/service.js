const OrgModel = require('../../models/orgs');

const queryOrg = query => OrgModel.find({
		$or: [{
			name: new RegExp(query, 'i'),
		}, {
			type: new RegExp(query, 'i'),
		}, {
			city: new RegExp(query, 'i'),
		}]
	}, 'name type city')
	.limit(3)
	.exec();

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
