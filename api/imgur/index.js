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
		default:
			response.status(400).json({success: false});
			break;
	}
}
