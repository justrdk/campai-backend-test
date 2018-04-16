import test from 'ava';
import sinon from 'sinon';
import handler from '../handler';
import service from '../service';

test('searchContacts', async t => {
	const request = {
		query: {
			search: 'foo',
		},
	};
	const expectedContacts = [{ first_name: 'foo', last_name: 'bar' }];

	sinon.stub(service, 'searchContacts').resolves(expectedContacts)
	const result = await handler(request);
	t.is(await result, expectedContacts);
});
