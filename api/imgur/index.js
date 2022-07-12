import axios from 'axios';

export default async function handler(request, response) {
	const IMGUR_CLIENTID = process.env.IMGUR_CLIENTID;
	switch (request.method) {
		case 'GET':
			try {
				response.status(200).json({success: true, data: IMGUR_CLIENTID});
			} catch (error) {
				response.status(400).json({success: false});
			}
			break;

		case 'POST':
			console.log('post request');
			console.log(IMGUR_CLIENTID);
			console.log(request.body);
			// try {
			// 	await axios({
			// 		method: 'post',
			// 		url: 'https://api.imgur.com/3/image',
			// 		headers: {
			// 			Authorization: `Client-ID ${IMGUR_CLIENTID}`,
			// 		},
			// 		data: request.body,
			// 	});
			response.status(200).json({success: true, data: IMGUR_CLIENTID});
			// } catch (error) {
			// 	response.status(400).json({success: false});
			// }
			break;
		default:
			response.status(400).json({success: false});
			break;
	}
}
