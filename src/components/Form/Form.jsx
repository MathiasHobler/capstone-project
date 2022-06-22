import {useState} from 'react';
import styled, {StyledComponent} from 'styled-components';

const Form = () => {
	const [event, setEvent] = useState({
		title: '',
		date: '',
		time: '',
		description: '',
	});

	return (
		<FormContainer
			onSubmit={e => {
				e.preventDefault();
				console.log(e);
				console.log(event);
			}}
		>
			<label htmlFor="eventTitle" aria-label="Enter your title">
				Title:
				<input
					type="text"
					id="eventTitle"
					value={event.title}
					data-testid="testInput"
					onChange={e => {
						setEvent({...event, title: e.target.value});
					}}
				/>
			</label>

			<label htmlFor="setDate" aria-label="Choose your date">
				Date:
				<input
					type="date"
					id="setDate"
					value={event.date}
					onChange={e => {
						setEvent({...event, date: e.target.value});
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
					value={event.time}
					onChange={e => {
						setEvent({...event, time: e.target.value});
					}}
				></input>
			</label>

			<label htmlFor="eventDescription" aria-label="Describe your event">
				Description:
				<input
					type="text"
					id="eventDescription"
					value={event.description}
					onChange={e => {
						setEvent({...event, description: e.target.value});
					}}
				/>
			</label>

			<input type="submit" value="submit" disabled={event.title === ''} />
		</FormContainer>
	);
};

export default Form;

const FormContainer = styled.form`
	width: 70%;
	margin: auto;
	display: flex;
	flex-direction: column;
	border: 2px solid black;
	border-radius: 2em;
	background-color: lightcoral;
	justify-content: center;
	align-items: center;
	gap: 2em;
	padding: 2em;
`;
