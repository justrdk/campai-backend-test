import test from 'ava';
import sinon from 'sinon';
import handler from '../handler';
import service from '../service';

test('searchOrgs', async t => {
	const request = {
		query: {
			search: 'foo',
		},
	};
	const expectedOrgs = [{ name: 'foo', type: 'bar', city: 'foo-bar' }];

	sinon.stub(service, 'searchOrgs').resolves(expectedOrgs)
	const result = await handler(request);
	t.is(await result, expectedOrgs);
});
