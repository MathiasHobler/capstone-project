import axios from 'axios';
import {useState, useEffect} from 'react';

import {useCreate} from '../../hooks/useForm';
import ImageUpload from '../Inputfield/ImageInput';
import {Inputfield} from '../Inputfield/Inputfield';

import {Container} from './Form.styled';

const FormDetailsEvent = () => {
	const [imgurID, setImgurID] = useState('');
	const newEvent = useCreate(state => state.event);
	const setNewEvent = useCreate(state => state.setNewEvent);

	useEffect(() => {
		async function getImgurId() {
			await axios
				.get('/api/imgur')
				.then(({data}) => {
					setImgurID(data.data);
				})
				.catch(error => {
					setImgurID('');
				});
		}
		getImgurId();
	}, []);

	return (
		<Container>
			<Inputfield
				label={'title *'}
				type={'text'}
				value={newEvent.title}
				setValue={input => setNewEvent({...newEvent, title: input})}
			/>
			<ImageUpload imgurID={imgurID} />
			<Inputfield
				label={'private'}
				type={'checkbox'}
				value={newEvent.private}
				setValue={input => setNewEvent({...newEvent, private: input})}
			/>
		</Container>
	);
};

export default FormDetailsEvent;
