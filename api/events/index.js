import connectToMongodb from '../../backend/db/connect-mongo-db';
import Event from '../../backend/models/Event';

export default async function handler(request, response) {
	await connectToMongodb();
  
	switch (request.method) {
		case 'GET':
			try {
				const events = await Event.find({});
				response.status(200).json({success: true, data: events});
			} catch (error) {
				response.status(400).json({success: false});
			}
			break;
		case 'POST':
			try {
				const newEvent = await Event.create(request.body);
				response.status(200).json({success: true, data: newEvent});
			} catch (error) {
				response.status(400).json({success: false});
			}
			break;
		default:
			response.status(400).json({success: false});
			break;
	}
}
