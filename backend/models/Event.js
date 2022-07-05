import mongoose from 'mongoose';
const {Schema, model} = mongoose;

const schema = new Schema(
	{
		title: {
			type: String,
			min: 3,
			max: 20,
			default: '',
		},
		eventPicture: {
			type: String,
			default: 'https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg',
		},
		coverPicture: {
			type: String,
		},
		author: {
			type: String,
			require: false,
		},
		private: {
			type: Boolean,
			default: false,
		},
		participants: {
			type: Array,
			default: [],
		},
		categories: {
			type: Array,
			default: [],
		},
		description: {
			type: String,
			max: 500,
			required: true,
		},
		address: {
			type: String,
			max: 50,
		},
		city: {
			type: String,
			max: 50,
		},
		zip: {
			type: String,
		},
		date: {
			type: String,
		},
		location: {
			type: Array,
			default: [],
		},
		bookmark: {
			type: Boolean,
			default: false,
		},
	},
	{
		versionKey: false,
	}
);
export default model('Event', schema, 'event');
