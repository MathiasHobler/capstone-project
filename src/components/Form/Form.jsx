import {useEffect, useState} from 'react';

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
	const [{error}, setData] = useState({data: [], error: null, success: null});
	const [state, setValid] = useState({valid: false, message: ''});
	const step = useStep(state => state.step);
	const nextStep = useStep(state => state.nextStep);
	const prevStep = useStep(state => state.prevStep);
	const newEvent = useCreate(state => state.event);
	const resetStep = useStep(state => state.resetStep);
	const action = useStep(state => state.action);
	const title = useStep(state => state.title);

	function createEvent(data) {
		fetch('/api/events', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then(response => {
				if (!response.ok) {
					throw Error(response.statusText);
				} else {
					return response.json();
				}
			})
			.then(data => {
				setData({
					data: data.data,
					error: null,
				});
			})
			.catch(error => {
				setData({
					data: '',
					error: error.message,
				});
			});
	}

	function updateEvent(data, id) {
		fetch(`/api/events/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then(response => {
				if (!response.ok) {
					throw Error(response.statusText);
				} else {
					return response.json();
				}
			})
			.catch(error => {
				setData({
					data: '',
					error: error.message,
				});
			});
	}

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
					if (action === 'create') {
						createEvent(newEvent);
					} else if (action === 'update') {
						updateEvent(newEvent, newEvent._id);
					}
					nextStep();
				}}
			>
				<FormHeader>{title}</FormHeader>
				{step === 3 && !state.valid && (
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
