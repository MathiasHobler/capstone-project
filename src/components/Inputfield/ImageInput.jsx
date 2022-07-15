import axios from 'axios';
import React, {useState} from 'react';

import {useCreate} from '../../hooks/useForm';

import {ImageContainer} from './ImageInput.styled';

const ImageUpload = () => {
	const setNewEvent = useCreate(state => state.setNewEvent);
	const newEvent = useCreate(state => state.event);
	const [imageURL, setImageURL] = useState({
		data: null,
		success: null,
		error: null,
		loading: null,
	});
	const imageRef = React.useRef();
	const [isActive, setIsActive] = useState(false);

	const getImageURL = async () => {
		setImageURL({
			data: imageURL.data,
			success: false,
			error: false,
			loading: true,
		});

		const formData = new FormData();
		formData.append('file', imageRef.current.files[0]);
		try {
			const {data} = await axios.post('/api/imgur/upload', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			setImageURL({
				data: data.url,
				success: true,
				error: false,
				loading: false,
			});
			setNewEvent({...newEvent, eventPicture: data.url});
		} catch (error) {
			setImageURL({
				data: imageURL.url,
				success: false,
				error: true,
				loading: false,
			});
			console.error(error);
		}
	};

	return (
		<ImageContainer isActive={isActive}>
			<section>
				<label htmlFor="image">
					{!imageURL.success && !imageURL.error && 'Choose File'}
					{imageURL.success && 'File Uploaded '}
					{imageURL.error && 'Upload failed'}
					{imageURL.loading && 'Image is Uploading'}
				</label>
				<input
					type="file"
					ref={imageRef}
					name="file"
					id="image"
					onClick={() => {
						setIsActive(true);
					}}
					onChange={getImageURL}
					hidden
				/>
				<span>Upload Eventpicture</span>
			</section>
		</ImageContainer>
	);
};

export default ImageUpload;
