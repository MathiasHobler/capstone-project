import {SettingsEthernetSharp} from '@mui/icons-material';
import {useEffect, useState} from 'react';
import styled from 'styled-components';

import {useStep, useCreate} from '../../hooks/useForm';

import {FormContainer} from './Form.styled';
import FormAddressEvent from './FormAddressEvent';
import FormDescriptionEvent from './FormDescriptionEvent';
import FormDetailsEvent from './FormDetailsEvent';
import Success from './Success';

const Form = ({title}) => {
	const [, setData] = useState({data: [], error: null});
	const step = useStep(state => state.step);
	const nextStep = useStep(state => state.nextStep);
	const prevStep = useStep(state => state.prevStep);
	const newEvent = useCreate(state => state.event);
	const resetStep = useStep(state => state.resetStep);
	const setNewEvent = useCreate(state => state.setNewEvent);

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
		console.log(newEvent);
	}, [newEvent]);

	function render() {
		switch (step) {
			case 1:
				return <FormDetailsEvent />;
			case 2:
				return <FormAddressEvent />;
			case 3:
				return <FormDescriptionEvent />;
			default:
				return <Success />;
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
					setNewEvent({
						pictures: {
							eventPicture: '',
						},
						title: '',
						private: false,
						street: '',
						city: '',
						zip: 0,

						date: '',
						time: '',
						desc: '',
					});
				}}
			>
				<h3>{title}</h3>
				{render()}
				<article>
					{step > 1 && (
						<button
							onClick={() => {
								if (step > 1) {
									prevStep();
								}
							}}
						>
							Step backward
						</button>
					)}

					{step < 4 && (
						<button
							onClick={() => {
								if (step < 4) {
									nextStep();
								}
							}}
						>
							Step forward
						</button>
					)}
					{step === 4 && (
						<button onClick={() => resetStep()} type="submit">
							submit
						</button>
					)}
				</article>
				{/* <label htmlFor="eventTitle" aria-label="Enter your title">
					Title:
					<input
						type="text"
						id="eventTitle"
						value={newEvent.title}
						data-testid="testInput"
						onChange={e => {
							// setEvent({...event, title: e.target.value});
							setNewEvent({...newEvent, title: e.target.value});
						}}
					/>
				</label>

				<label htmlFor="setDate" aria-label="Choose your date">
					Date:
					<input
						type="date"
						id="setDate"
						value={newEvent.date}
						required
						onChange={e => {
							// setEvent({...event, date: e.target.value});
							setNewEvent({...newEvent, date: e.target.value});
						}}
					/>
				</label>

				<label htmlFor="starttime" aria-label="Choose the time, you want to start">
					Choose a time for start:
					<input
						type="time"
						id="starttime"
						name="starttime"
						min="00:00"
						max="23:59"
						required
						value={newEvent.time}
						onChange={e => {
							// setEvent({...event, time: e.target.value});
							setNewEvent({...newEvent, time: e.target.value});
						}}
					></input>
				</label>

				<label htmlFor="eventDescription" aria-label="Describe your event">
					Description:
					<input
						type="text"
						id="eventDescription"
						value={newEvent.desc}
						required
						onChange={e => {
							// setEvent({...event, desc: e.target.value});
							setNewEvent({...newEvent, desc: e.target.value});
						}}
					/>
				</label>

				<input type="submit" value="submit" disabled={newEvent.title === ''} /> */}
			</FormContainer>
		</>
	);
};

export default Form;

const Bubble = styled.div`
	position: absolute;
	z-index: -10;
	width: 430px;
	height: 520px;

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
			bottom: -80px;
			background: linear-gradient(to right, #ff512f, #f09819);
		}
	}
`;
