import {useState} from 'react';
import styled from 'styled-components';

import {useCreate} from '../../hooks/useForm';

const Inputfield = ({label, type, value, setValue}) => {
	const newEvent = useCreate();
	const setNewEvent = useCreate(state => state.setNewEvent);

	return (
		<InputContainer>
			<label htmlFor={label}></label>
			<input
				type={type}
				name={label}
				d
				value={value}
				onChange={e => {
					type === 'checkbox'
						? setNewEvent({...newEvent, private: e.target.checked})
						: setValue(e.target.value);
				}}
				required="required"
			></input>
			<span htmlFor={label}>{label}</span>
		</InputContainer>
	);
};
export default Inputfield;

export const TextArea = ({label, type, value}) => {
	const [input, setInput] = useState('');
	return (
		<InputContainer>
			<label htmlFor={label}></label>
			<textarea
				type={type}
				name={label}
				value={input}
				onChange={e => {
					setInput(e.target.value);
					value(e.target.value);
				}}
				autoFocus={false}
				required="required"
				rows="12"
				cols="50"
			></textarea>
			<span htmlFor={label}>{label}</span>
		</InputContainer>
	);
};

const InputContainer = styled.div`
	position: relative;
	width: 16em;

	span {
		position: absolute;
		left: 0;
		padding: 0.625em;
		transition: 0.5s;
		color: rgba(255, 255, 255, 0.25);
		font-size: 1em;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
		text-transform: uppercase;
		pointer-events: none;
	}

	input,
	textarea {
		width: 100%;
		padding: 0.625em;
		transition: 0.5s;
		border: 1px solid rgba(255, 255, 255, 0.25);
		border-radius: 5px;
		outline: none;
		background-color: rgba(255, 255, 255, 0.07);
		color: rgb(255, 255, 255);
		font-size: 1em;
		scrollbar-color: #00dfc4 #6b0b0b;

		&:valid ~ span,
		&:focus ~ span {
			padding: 0 10px;
			transform: translateX(10px) translateY(-7px);
			border-right: 1px solid #1d2b3a;
			border-left: 1px solid #1d2b3a;
			border-radius: 5px;
			background: #00dfc4;
			color: #1d2b3a;
			font-size: 0.65em;
		}

		&:valid,
		&:focus {
			border: 1px solid #00dfc4;
		}
	}
`;
