const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SMALL_CLAIMS = require('../constants').SMALL_CLAIMS, 
GUARDIANSHIP = require('../constants').GUARDIANSHIP, 
FAMILY_LAW = require('../constants').FAMILY_LAW, 
EVICTION = require('../constants').EVICTION, 
DOMESTIC_VIOLENCE = require('../constants').DOMESTIC_VIOLENCE, 
TRAFFIC = require('../constants').TRAFFIC;

//= ===============================
// Case Schema
//= ===============================
const CaseSchema = new Schema({
	isPlaintiff: String,
	caseNum: {
		type: String,
	},
	caseType: {
		type: String,
		enum: [SMALL_CLAIMS, GUARDIANSHIP, FAMILY_LAW, EVICTION, DOMESTIC_VIOLENCE, TRAFFIC],
		required: true
	},
	plaintiffs: [String],
	defendants: [String],
	steps: [{
		id: Number,
		completed: Boolean,
		stage: Number,
	}],
	forms: [{ formId: String, status: Boolean}]
},
 {
 	timestamps: true
 });

module.exports = mongoose.model('Case', CaseSchema);