const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			require: true,
			min: 3,
			max: 20,
			unique: true,
		},
		pictures: {
			eventPicture: {
				type: String,
				default: '',
			},
			coverPicture: {
				type: String,
				default: '',
			},
		},
		author: {
			type: String,
			require: true,
		},
		private: {
			type: Boolean,
			default: false,
		},
		participates: {
			type: Array,
			default: [],
		},
		categories: {
			type: Array,
			default: [],
		},
		desc: {
			type: String,
			default: '',
			max: 50,
			required: true,
		},
		adress: {
			street: {
				type: String,
				default: '',
				max: 50,
			},
			city: {
				type: String,
				default: '',
				max: 50,
			},
		},
		date: {
			type: Date,
			default: Date.now(),
		},
		location: {
			type: Array,
			default: [],
		},
	},
	{
		versionKey: false,
	}
);
module.exports = mongoose.model('Event', EventSchema);
