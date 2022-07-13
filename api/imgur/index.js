export default async function handler(request, response) {
	switch (request.method) {
		case 'GET':
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
