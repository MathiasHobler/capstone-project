import mongoose from 'mongoose';
const {Schema, model} = mongoose;

const schema = new Schema(
	{
		title: {
			type: String,
			require: true,
			min: 3,
			max: 20,
			unique: false,
		},
		pictures: {
			eventPicture: {
				type: String,
				default: 'https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg',
			},
			coverPicture: {
				type: String,
				default: '',
			},
		},
		author: {
			type: String,
			require: false,
			default: '',
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
		description: {
			type: String,
			default: '',
			max: 50,
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
			type: String,
			default: '',
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
export default model('Event', schema, 'event');
