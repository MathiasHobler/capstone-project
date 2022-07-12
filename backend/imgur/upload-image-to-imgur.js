import axios from 'axios';
import {useState, useEffect} from 'react';

import {useCreate} from '../../hooks/useForm';

export const GetImageURL = async ({data}) => {
	console.log(process.env.IMGUR_CLIENTID);
	const setNewEvent = useCreate(state => state.setNewEvent);
	const newEvent = useCreate(state => state.event);
	const [imageURL, setImageURL] = useState({
		data: null,
		success: null,
		error: null,
		loading: null,
	});

	useEffect(() => {
		setImageURL({
			data: imageURL.data,
			success: false,
			error: false,
			loading: true,
		});

		const fetchData = async () => {
			await axios({
				method: 'post',
				url: 'https://api.imgur.com/3/image',
				headers: {
					Authorization: `Client-ID ` + process.env.IMGUR_CLIENTID,
				},
				data: data,
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
		fetchData();
	}, [data]);
};
