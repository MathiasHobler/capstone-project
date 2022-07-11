import {useCreate} from '../../hooks/useForm';
import ImageUpload from '../Inputfield/ImageInput';
import {Inputfield} from '../Inputfield/Inputfield';

import {Container} from './Form.styled';

const FormDetailsEvent = () => {
	const newEvent = useCreate(state => state.event);
	const setNewEvent = useCreate(state => state.setNewEvent);
	return (
		<Container>
			<Inputfield
				label={'title *'}
				type={'text'}
				value={newEvent.title}
				setValue={input => setNewEvent({...newEvent, title: input})}
			/>
			<ImageUpload />
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
