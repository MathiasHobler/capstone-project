import styled from 'styled-components';

import {useCreate} from '../../hooks/useForm';

import ImageUpload from './ImageInput';
import Inputfield from './Inputfield';

const FormDetailsEvent = () => {
	const newEvent = useCreate(state => state.event);
	const setNewEvent = useCreate(state => state.setNewEvent);
	return (
		<Container>
			<Inputfield
				label={'title'}
				type={'text'}
				value={input => setNewEvent({...newEvent, title: input})}
			/>
			<ImageUpload />
			<Inputfield
				label={'Private'}
				type={'checkbox'}
				value={input => {
					console.log(input);
					setNewEvent({...newEvent, private: input});
				}}
			/>
		</Container>
	);
};

export default FormDetailsEvent;

const Container = styled.section`
	display: flex;
	position: absolute;
	top: 4em;
	flex-direction: column;
	align-content: flex-end;
	gap: 1em;
	margin-top: 1em;

	article {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
`;
