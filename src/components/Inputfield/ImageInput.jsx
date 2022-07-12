import axios from 'axios';
import React, {useState} from 'react';

import {useCreate} from '../../hooks/useForm';

import {ImageContainer} from './ImageInput.styled';

const ImageUpload = ({imgurID}) => {
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
		await axios({
			method: 'post',
			url: 'https://api.imgur.com/3/image',
			headers: {
				Authorization: `Client-ID ` + imgurID,
			},
			data: imageRef.current.files[0],
		})
			.then(({data}) => {
				setImageURL({
					data: data.data.link,
					success: true,
					error: false,
					loading: false,
				});
				setNewEvent({...newEvent, eventPicture: data.data.link});
				alert('Image uploaded successfully');
			})
			.catch(err => {
				setImageURL({
					data: imageURL.data,
					success: false,
					error: true,
					loading: false,
				});
				alert('Image not uploaded, please try again');
			});
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
