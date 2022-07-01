import styled from 'styled-components';

import {useCreate} from '../../hooks/useForm';

import Inputfield from './Inputfield';

const FormAddressEvent = () => {
	const newEvent = useCreate(state => state.event);
	const setNewEvent = useCreate(state => state.setNewEvent);
	return (
		<Container>
			<Inputfield
				label={'Street'}
				type={'text'}
				value={newEvent.street}
				setValue={input => setNewEvent({...newEvent, street: input})}
			/>
			<Inputfield
				label={'City'}
				type={'text'}
				value={newEvent.city}
				setValue={input => setNewEvent({...newEvent, city: input})}
			/>
			<Inputfield
				label={'Zip'}
				type={'text'}
				value={newEvent.zip}
				setValue={input => setNewEvent({...newEvent, zip: input})}
			/>
		</Container>
	);
};

export default FormAddressEvent;

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
		bottom: -12em;
		flex-direction: row;
		justify-content: space-around;
	}
`;
