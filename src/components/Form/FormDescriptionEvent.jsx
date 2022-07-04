import styled from 'styled-components';

import {useCreate} from '../../hooks/useForm';
import {TextArea} from '../Inputfield/Inputfield';
import Inputfield from '../Inputfield/Inputfield';

import {Container} from './Form.styled';

const FormDescriptionEvent = () => {
	const newEvent = useCreate(state => state.event);
	const setNewEvent = useCreate(state => state.setNewEvent);

	let today = setDate();

	function setDate() {
		let month = new Date().getMonth() + 1;
		let day = new Date().getDate();
		let year = new Date().getFullYear();

		if (month < 10) month = `0${month}`;
		if (day < 10) day = `0${day}`;
		return `${year}-${month}-${day}`;
	}

	return (
		<Container>
			<Inputfield
				label={'Datum *'}
				type={'date'}
				value={newEvent.date}
				min={today}
				setValue={input => setNewEvent({...newEvent, date: input})}
			/>
			<Inputfield
				label={'Start Zeit *'}
				type={'time'}
				value={newEvent.time}
				setValue={input => setNewEvent({...newEvent, time: input})}
			/>
			<TextArea
				label={'Description *'}
				type={'text'}
				value={newEvent.description}
				setValue={input => setNewEvent({...newEvent, description: input})}
			/>
		</Container>
	);
};

export default FormDescriptionEvent;
