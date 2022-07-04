import {useEffect, useState} from 'react';
import styled from 'styled-components';

import {useStep, useCreate} from '../../hooks/useForm';

import {FormContainer} from './Form.styled';
import FormAddressEvent from './FormAddressEvent';
import FormDescriptionEvent from './FormDescriptionEvent';
import FormDetailsEvent from './FormDetailsEvent';
import Success from './Success';

const Form = ({title}) => {
	const [{error}, setData] = useState({data: [], error: null, success: null});
	const [state, setValid] = useState({valid: false, message: ''});
	const step = useStep(state => state.step);
	const nextStep = useStep(state => state.nextStep);
	const prevStep = useStep(state => state.prevStep);
	const newEvent = useCreate(state => state.event);
	const resetStep = useStep(state => state.resetStep);

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

	useEffect(() => {
		requiredData();
		console.log(newEvent);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [newEvent]);

	function requiredData() {
		if (newEvent.title === '') {
			setValid({message: 'Title should have at least 3 Characters', valid: false});
		} else if (newEvent.description === '') {
			setValid({...state, valid: false});
		} else if (newEvent.date === '') {
			setValid({message: 'Please fill a date in the future', valid: false});
		} else if (newEvent.time === '') {
			setValid({message: 'Please fill when your Event start ', valid: false});
		} else if (newEvent.zip === '') {
			setValid({message: 'Please fill in a zip between 01000 and 99999', valid: false});
		} else if (newEvent.street === '') {
			setValid({message: 'Please fill in a Street', valid: false});
		} else if (newEvent.city === '') {
			setValid({message: 'Please fill in a City', valid: false});
		} else {
			setValid({message: '', valid: true});
		}
	}

	function render() {
		switch (step) {
			case 1:
				return <FormDetailsEvent />;
			case 2:
				return <FormAddressEvent />;
			case 3:
				return <FormDescriptionEvent />;
			default:
				return <Success error={error} />;
		}
	}

	return (
		<>
			<Bubble>
				<div></div>
				<div></div>
			</Bubble>
			<FormContainer
				onSubmit={e => {
					e.preventDefault();
					createEvent(newEvent);
					nextStep();
				}}
			>
				<h3>{title}</h3>
				{step === 3 && !state.valid && <p>Please Fill out all required * fields</p>}
				{render()}
				<article>
					{step > 1 && (
						<button
							type="button"
							onClick={() => {
								if (step > 1) {
									prevStep();
								}
							}}
						>
							Step backward
						</button>
					)}

					{step < 3 && (
						<button
							type="button"
							onClick={() => {
								if (step < 3) {
									nextStep();
								}
							}}
						>
							Step forward
						</button>
					)}
					{step === 3 && state.valid && <button type="submit">submit</button>}
					{step === 4 && (
						<button onClick={() => resetStep()} type="button">
							Back
						</button>
					)}
				</article>
			</FormContainer>
		</>
	);
};

export default Form;

const Bubble = styled.div`
	position: absolute;
	z-index: -10;
	width: 100%;
	height: 300px;

	div {
		position: absolute;
		width: 150px;
		height: 150px;
		border-radius: 50%;
		&:first-child {
			top: -80px;
			left: -80px;
			background: linear-gradient(#1845ad, #23a2f6);
		}
		&:last-child {
			right: -30px;
			bottom: -260px;
			background: linear-gradient(to right, #ff512f, #f09819);
		}
	}
`;
