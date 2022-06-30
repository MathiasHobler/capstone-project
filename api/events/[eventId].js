import connectToMongodb from '../../backend/db/connect-mongo-db';
import Event from '../../backend/models/Event';

export default async function handler(request, response) {
	await connectToMongodb();
	const {eventId} = request.query;
	if (request.method === 'DELETE') {
		await Event.findByIdAndDelete(eventId);
		return response.status(200).json(eventId);
	}
}
