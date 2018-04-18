const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orgsSchema = Schema({
	_id: Schema.Types.ObjectId,
	email: String,
	zip: String,
	city: String,
	name: String,
	type: String,
	theme: String,
	street: String,
	country: String,
	latitude: String,
	activities: [],
	description: String,
	founding_year: Number,
	locale: String,
	longititude: String,
	created: Date,
	logo: String,
	__DELETE: Boolean,
	fake_data: Boolean,
});

orgsSchema.index({ name: 'text', type: 'text', city: 'text' });

const OrgsModel = mongoose.model('orgs', orgsSchema);

module.exports = OrgsModel;
