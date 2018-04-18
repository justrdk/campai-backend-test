const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactGroupsSchema = Schema({
	_id: Schema.Types.ObjectId,
	address: {
		city: {
			type: String,
		},
		zip: {
			type: String,
		},
		email: {
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
		mobile_phone: {
			type: String,
		},
	},
	org: { type: Schema.Types.ObjectId, ref: 'orgs' },
	bic: String,
	name: String,
	iban: String,
	direct_debit: Boolean,
	sepa_reference: String,
	account_holder: String,
	invoice_by_email: Boolean,
	generate_invoice: Boolean,
	sepa_signature_date: Number,
	__DELETE: Boolean,
	__deleteContacts: Boolean,
});

contactGroupsSchema.index({ name: 'text' });

const ContactGroupsModel = mongoose.model('contactgroups', contactGroupsSchema);

module.exports = ContactGroupsModel;
