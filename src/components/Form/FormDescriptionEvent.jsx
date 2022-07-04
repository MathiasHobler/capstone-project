import styled from 'styled-components';

import {useCreate} from '../../hooks/useForm';
import {TextArea} from '../Inputfield/Inputfield';
import Inputfield from '../Inputfield/Inputfield';

import {Container} from './Form.styled';

const FormDescriptionEvent = () => {
	const newEvent = useCreate(state => state.event);
	const setNewEvent = useCreate(state => state.setNewEvent);
	console.log(Date.now().toString());
	return (
		<Container>
			<Inputfield
				label={'Datum'}
				type={'date'}
				value={newEvent.date}
				min={Date.now()}
				setValue={input => setNewEvent({...newEvent, date: input})}
			/>
			<Inputfield
				label={'Start Zeit'}
				type={'time'}
				value={newEvent.time}
				setValue={input => setNewEvent({...newEvent, time: input})}
			/>
			<TextArea
				label={'Description'}
				type={'text'}
				value={newEvent.description}
				setValue={input => setNewEvent({...newEvent, description: input})}
			/>
		</Container>
	);
};

export default FormDescriptionEvent;
