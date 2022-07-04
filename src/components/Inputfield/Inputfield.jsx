import {useState} from 'react';

import {InputContainer} from './Inutfield.styled';

const Inputfield = ({label, type, value, setValue, min, max}) => {
	// const [valid, setValid] = useState(true);
	// function handleInput(name, input) {
	// 	switch (name) {
	// 		case 'title':
	// 			if (input.target.value >= 3) {
	// 				setValid(true);
	// 				setValue(input.target.value);
	// 			} else {
	// 				setValid(false);
	// 			}
	// 			break;
	// 		case 'street':
	// 			setValue(input.target.value);
	// 			break;
	// 		case 'city':
	// 			setValue(input.target.value);
	// 			break;
	// 		case 'zip':
	// 			setValue(input.target.value);
	// 			break;
	// 		case 'private':
	// 			setValue(input.target.checked);
	// 			break;
	// 		case 'email':
	// 			break;
	// 		case 'password':
	// 			break;
	// 		default:
	// 			break;
	// 	}
	// }

	return (
		<InputContainer valid>
			<label htmlFor={label}></label>
			<input
				type={type}
				name={label}
				value={value}
				onChange={e => {
					// handleInput(type, e);
					type === 'checkbox' ? setValue(e.target.checked) : setValue(e.target.value);
				}}
				required="required"
			></input>
			<span htmlFor={label}>{label}</span>
		</InputContainer>
	);
};
export default Inputfield;

export const TextArea = ({label, type, value, setValue}) => {
	return (
		<InputContainer valid>
			<label htmlFor={label}></label>
			<textarea
				type={type}
				name={label}
				value={value}
				onChange={e => {
					setValue(e.target.value);
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
