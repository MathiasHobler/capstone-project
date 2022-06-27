import connectToMongodb from '../../backend/db/connect-mongo-db';
import Event from '../../backend/models/Event';

export default async function handler(request, response) {
	await connectToMongodb();

	if (request.method === 'GET') {
		const events = await Event.find({});
		return response.status(200).json({data: events});
	}

	if (request.method === 'POST') {
		const newEvent = await new Event(request.body);
		await newEvent.save();
		return response.status(201).json({data: newEvent});
	}
}
