import connectToMongodb from '../../backend/db/connect-mongo-db';
import Event from '../../backend/models/Event';

export default async function handler(request, response) {
	const {eventId} = request.query;

	await connectToMongodb();

	switch (request.method) {
		case 'GET':
			try {
				response.status(200).json({success: true});
			} catch (error) {
				response.status(400).json({success: false});
			}
			break;
		case 'DELETE':
			try {
				const deletedEvent = await Event.findByIdAndDelete(eventId);
				if (!deletedEvent) {
					return response.status(400).json({success: false});
				}
				response.status(200).json({success: true});
			} catch (error) {
				response.status(400).json({success: false});
			}
			break;
		case 'PUT':
			try {
				response.status(200).json({success: true});
			} catch (error) {
				response.status(400).json({success: false});
			}
			break;
		default:
			response.status(400).json({success: false});
			break;
	}
}
