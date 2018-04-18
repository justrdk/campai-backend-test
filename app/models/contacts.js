const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactsSchema = Schema({
	_id: Schema.Types.ObjectId,
	avatar: {
		top_type: {
			type: String,
		},
		eye_type: {
			type: String,
		},
		mouth_type: {
			type: String,
		},
		skin_color: {
			type: String,
		},
		clothe_type: {
			type: String,
		},
		eyebrow_type: {
			type: String,
		},
		accesories_type: {
			type: String,
		},
	},
	address: {
		city: {
			type: String,
		},
		zip: {
			type: String,
		},
		country: {
			type: String,
		},
		phone: {
			type: String,
		},
		street: {
			type: String,
		},
		name: {
			type: String,
		},
	},
	bic: String,
	iban: String,
	type: String,
	tags: [],
	title: String,
	email: String,
	notes: [],
	gender: String,
	fields: [],
	last_name: String,
	contracts: [],
	birthDate: Number,
	categories: [],
	first_name: String,
	placements: [],
	member_since: Number,
	direct_debit: Boolean,
	mobile_phone: String,
	account_holder: String,
	sepa_reference: String,
	generate_invoice: Boolean,
	sepa_signature_date: Number,
	org: { type: Schema.Types.ObjectId, ref: 'orgs' },
	group: { type: Schema.Types.ObjectId, ref: 'contactgroups' },
	code: String,
	member_number: String,
	created: Date,
	user: String,
	birthDay: Number,
	invoice_by_email: Boolean,
	member_exit: String,
});

const ContactsModel = mongoose.model('contacts', contactsSchema);

module.exports = ContactsModel;
