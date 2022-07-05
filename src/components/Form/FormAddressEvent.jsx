import {useCreate} from '../../hooks/useForm';
import {Inputfield} from '../Inputfield/Inputfield';

import {Container} from './Form.styled';

const FormAddressEvent = () => {
	const newEvent = useCreate(state => state.event);
	const setNewEvent = useCreate(state => state.setNewEvent);
	return (
		<Container>
			<Inputfield
				label={'street *'}
				type={'text'}
				value={newEvent.street}
				setValue={input => setNewEvent({...newEvent, street: input})}
			/>
			<Inputfield
				label={'city *'}
				type={'text'}
				value={newEvent.city}
				setValue={input => setNewEvent({...newEvent, city: input})}
			/>
			<Inputfield
				label={'zip *'}
				type={'text'}
				value={newEvent.zip}
				setValue={input => setNewEvent({...newEvent, zip: input})}
			/>
		</Container>
	);
};

export default FormAddressEvent;
