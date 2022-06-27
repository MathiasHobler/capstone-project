import {useState} from 'react';

import FormContainer from './Form.styled';

const Form = () => {
	const [event, setEvent] = useState({
		title: '',
		date: '',
		time: '',
		description: '',
	});

	const [testInputs, setTestInputs] = useState({title: '', date: '', time: '', description: ''});

	return (
		<>
			<FormContainer
				onSubmit={e => {
					e.preventDefault();
					setTestInputs({...event});
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
						value={event.description}
						required
						onChange={e => {
							setEvent({...event, description: e.target.value});
						}}
					/>
				</label>

				<input type="submit" value="submit" disabled={event.title === ''} />
			</FormContainer>

			<div>
				<h3>Show Test Inputs</h3>
				<article>
					<h2 aria-level="2">{testInputs.title}</h2>
					<p className="description">{testInputs.description}</p>
					<p className="date">{testInputs.date}</p>
					<p className="time">{testInputs.time}</p>
				</article>
			</div>
		</>
	);
};

export default Form;
