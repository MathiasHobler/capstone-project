import {useState} from 'react';

import FormContainer from './Form.styled';

const Form = () => {
	const [, setData] = useState({data: [], error: null});
	const [event, setEvent] = useState({
		title: '',
		date: '',
		time: '',
		desc: '',
	});
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

	return (
		<>
			<FormContainer
				onSubmit={e => {
					e.preventDefault();
					createEvent(event);
					setEvent({
						title: '',
						date: '',
						time: '',
						desc: '',
					});
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
						required
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
						value={event.desc}
						required
						onChange={e => {
							setEvent({...event, desc: e.target.value});
						}}
					/>
				</label>

				<input type="submit" value="submit" disabled={event.title === ''} />
			</FormContainer>
		</>
	);
};

export default Form;
