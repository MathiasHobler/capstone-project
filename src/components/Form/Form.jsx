import {useEffect, useState} from 'react';

import {useEvents} from '../../hooks/useEvents';
import {useStep, useCreate} from '../../hooks/useForm';
import Button from '../Button/index';

import {BTNContainer, FormContainer, FormHeader, FormHint} from './Form.styled';
import FormAddCategorie from './FormAddCategorie';
import FormAddressEvent from './FormAddressEvent';
import FormDescriptionEvent from './FormDescriptionEvent';
import FormDetailsEvent from './FormDetailsEvent';
import Success from './Success';

function Step({step, error}) {
	switch (step) {
		case 1:
			return <FormDetailsEvent />;
		case 2:
			return <FormAddressEvent />;
		case 3:
			return <FormAddCategorie />;
		case 4:
			return <FormDescriptionEvent />;
		default:
			return <Success error={error} />;
	}
}

const Form = () => {
	const [state, setValid] = useState({valid: false, message: ''});
	const step = useStep(state => state.step);
	const nextStep = useStep(state => state.nextStep);
	const prevStep = useStep(state => state.prevStep);
	const newEvent = useCreate(state => state.event);
	const resetStep = useStep(state => state.resetStep);
	const action = useStep(state => state.action);
	const title = useStep(state => state.title);
	const {error} = useEvents(state => state.events);
	const updateEvent = useEvents(state => state.updateEvent);
	const createEvent = useEvents(state => state.createEvent);

	useEffect(() => {
		if (newEvent.title === '') {
			setValid({message: 'Title should be filled', valid: false});
		} else if (newEvent.description === '') {
			setValid({message: 'Description should be filled', valid: false});
		} else if (newEvent.date === '') {
			setValid({message: 'Date should be filled', valid: false});
		} else if (newEvent.time === '') {
			setValid({message: 'Time should be filled', valid: false});
		} else if (newEvent.zip === '') {
			setValid({message: 'Zip should be filled', valid: false});
		} else if (newEvent.address === '') {
			setValid({message: 'Street should be filled', valid: false});
		} else if (newEvent.city === '') {
			setValid({message: 'City should be filled', valid: false});
		} else {
			setValid({message: '', valid: true});
		}
	}, [newEvent]);

	return (
		<>
			<FormContainer
				onSubmit={e => {
					e.preventDefault();
					switch (action) {
						case 'POST':
							createEvent(newEvent);
							break;
						case 'PUT':
							updateEvent(newEvent, newEvent._id);
							break;
						default:
							return <p>{error.message}</p>;
					}
					nextStep();
				}}
			>
				<FormHeader>{title}</FormHeader>
				{step === 4 && !state.valid && (
					<FormHint>Please Fill out all required * fields</FormHint>
				)}
				<Step step={step} error={error} />
				<BTNContainer>
					{step > 1 && (
						<Button
							type="button"
							onClick={() => {
								if (step > 1) {
									prevStep();
								}
							}}
						>
							Step backward
						</Button>
					)}

					{step < 4 && (
						<Button
							type="button"
							onClick={() => {
								if (step < 4) {
									nextStep();
								}
							}}
						>
							Step forward
						</Button>
					)}

					{step === 4 && state.valid && <Button type="submit">submit</Button>}
					{step === 5 && (
						<Button onClick={() => resetStep()} type="button">
							Back
						</Button>
					)}
				</BTNContainer>
			</FormContainer>
		</>
	);
};

export default Form;
