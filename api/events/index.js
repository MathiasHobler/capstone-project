import axios from 'axios';

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
				const api_key = process.env.MAP_API_KEY;
				let event = request.body;
				try {
					const {data} = await axios.get(
						`https://api.myptv.com/geocoding/v1/locations/by-address?country=Deutschland&postalCode=${event.zip}}&street=${event.address}&houseNumber=${event.housnr}`,
						{
							headers: {
								apiKey: api_key,
								'Content-Type': 'application/json',
							},
						}
					);
					event = {
						...event,
						location: [
							data.locations[0].referencePosition.latitude,
							data.locations[0].referencePosition.longitude,
						],
					};
				} catch (error) {
					response.status(400).json({message: error.message});
				}
				const newEvent = await Event.create(event);
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
