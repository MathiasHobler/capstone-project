import {InputContainer} from './Inutfield.styled';

export const Inputfield = ({label, type, value, setValue, min, max, size}) => {
	return (
		<InputContainer size={size} valid>
			<label htmlFor={label}></label>
			<input
				type={type}
				name={label}
				value={value}
				min={min}
				max={max}
				onChange={e => {
					type === 'checkbox' ? setValue(e.target.checked) : setValue(e.target.value);
				}}
				required="required"
			></input>
			<span htmlFor={label}>{label}</span>
		</InputContainer>
	);
};

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
