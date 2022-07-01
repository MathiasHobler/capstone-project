import styled from 'styled-components';

import {useCreate} from '../../hooks/useForm';

import {TextArea} from './Inputfield';
import Inputfield from './Inputfield';

const FormDescriptionEvent = () => {
	const newEvent = useCreate(state => state.event);
	const setNewEvent = useCreate(state => state.setNewEvent);
	return (
		<Container>
			<Inputfield
				label={'Datum'}
				type={'date'}
				value={input => setNewEvent({...newEvent, date: input})}
			/>
			<Inputfield
				label={'Start Zeit'}
				type={'time'}
				value={input => setNewEvent({...newEvent, time: input})}
			/>
			<TextArea
				label={'Description'}
				type={'text'}
				value={input => setNewEvent({...newEvent, description: input})}
			/>
		</Container>
	);
};

export default FormDescriptionEvent;
const Container = styled.section`
	display: flex;
	position: absolute;
	top: 4em;
	flex-direction: column;
	gap: 1em;
	margin-top: 1em;

	article {
		display: flex;
		position: relative;
		bottom: 0;
		flex-direction: row;
		justify-content: space-around;
	}
`;
