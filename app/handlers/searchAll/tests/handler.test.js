import test from 'ava';
import sinon from 'sinon';
import handler from '../handler';
import organizationsService from '../../organizations/service';
import contactsService from '../../contacts/service';
import contactgroupsService from '../../contactgroups/service';

test('searchOrgs', async t => {
	const request = {
		query: {
			search: 'foo',
		},
	};
	const expectedOrgs = [{ name: 'foo', type: 'bar', city: 'foo-bar' }];
	const expectedContacts = [{ first_name: 'foo', last_name: 'bar' }];
	const expectedContactGroup = [{ name: 'foo' }];

	sinon.stub(organizationsService, 'searchOrgs').resolves(expectedOrgs);
	sinon.stub(contactsService, 'searchContacts').resolves(expectedContacts);
	sinon.stub(contactgroupsService, 'searchContactGroups').resolves(expectedContactGroup);

	const expectedResult = [].concat.apply([], [expectedOrgs, expectedContacts, expectedContactGroup]);

	const result = await handler(request);
	t.deepEqual(await result, expectedResult);
});
