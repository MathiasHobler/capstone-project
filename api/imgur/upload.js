import cloudinary from 'cloudinary';
import formidable from 'formidable';

export const config = {
	api: {
		bodyParser: false,
	},
};

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_SECRET,
});

export default async function handler(request, response) {
	const form = formidable({});
	form.parse(request, async (error, fields, files) => {
		if (error) {
			response.status(400).json({message: error.message});
		} else {
			const {file} = files;
			const {newFilename, filepath} = file;
			const result = await cloudinary.v2.uploader.upload(filepath, {
				public_id: newFilename,
			});
			response.status(201).json(result);
		}
	});
}
