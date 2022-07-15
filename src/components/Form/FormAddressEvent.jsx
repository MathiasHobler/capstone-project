import {useCreate} from '../../hooks/useForm';
import {Inputfield} from '../Inputfield/Inputfield';

import {Container, FlexContainer} from './Form.styled';

const FormAddressEvent = () => {
	const newEvent = useCreate(state => state.event);
	const setNewEvent = useCreate(state => state.setNewEvent);
	return (
		<Container>
			<Inputfield
				label={'street *'}
				type={'text'}
				value={newEvent.address}
				setValue={input => setNewEvent({...newEvent, address: input})}
			/>

			<FlexContainer>
				<Inputfield
					size={'small'}
					label={'Nr. *'}
					type={'text'}
					value={newEvent.houseNumber}
					setValue={input => setNewEvent({...newEvent, houseNumber: input})}
				/>
				<Inputfield
					size={'medium'}
					label={'zip *'}
					type={'text'}
					value={newEvent.zip}
					setValue={input => setNewEvent({...newEvent, zip: input})}
				/>
			</FlexContainer>

			<Inputfield
				label={'city *'}
				type={'text'}
				value={newEvent.city}
				setValue={input => setNewEvent({...newEvent, city: input})}
			/>
		</Container>
	);
};

export default FormAddressEvent;
