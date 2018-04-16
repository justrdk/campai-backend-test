import test from 'ava';
import sinon from 'sinon';
import handler from '../handler';
import service from '../service';

test('searchContactGroups', async t => {
	const request = {
		query: {
			search: 'foo',
		},
	};
	const expectedContactGroup = [{ name: 'foo' }];

	sinon.stub(service, 'searchContactGroups').resolves(expectedContactGroup);
	const result = await handler(request);
	t.is(await result, expectedContactGroup);
});
