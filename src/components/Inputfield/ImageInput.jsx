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
		loading: null,
	});
	const imageRef = React.useRef();

	const getImageURL = async () => {
		setImageURL({
			data: imageURL.data,
			error: false,
			loading: true,
		});
		await axios({
			method: 'post',
			url: 'https://api.imgur.com/3/image',
			headers: {
				Authorization: `Client-ID fc88c8f5835b3ec`,
			},
			data: imageRef.current.files[0],
		})
			.then(({data}) => {
				setImageURL({
					data: data.data.link,
					error: false,
					loading: false,
				});
				setNewEvent({...newEvent, eventPicture: data.data.link});
				alert('Image uploaded successfully');
			})
			.catch(err => {
				alert('Image not uploaded, please try again');
			});
	};
	return (
		<ImageContainer>
			<section>
				<label htmlFor="image">Choose File</label>
				<input type="file" ref={imageRef} id="image" onChange={getImageURL} hidden />
				<span>Upload Eventpicture</span>
			</section>
		</ImageContainer>
	);
};

export default ImageUpload;
