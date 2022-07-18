import styled from 'styled-components';

export const InputContainer = styled.div`
	position: relative;
	width: ${props => (props.size === 'small' ? '6em' : props.size === 'medium' ? '9em' : '16em')};

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

	textarea {
		height: 10em;
	}

	input,
	textarea {
		width: 100%;
		padding: 0.625em;
		transition: 0.5s;
		border: 1px solid rgba(255, 255, 255, 0.25);
		border-radius: 5px;
		outline: none;
		background-color: transparent;
		color: #f7f7f7;
		font-size: 1em;
		scrollbar-color: #dba632 #1d2b3a;

		&:valid ~ span,
		&:focus ~ span {
			padding: 0 10px;
			transform: translateX(10px) translateY(-7px);
			border-right: 1px solid #1d2b3a;
			border-left: 1px solid #1d2b3a;
			border-radius: 5px;
			background: #dba632;
			color: #1d2b3a;
			font-size: 0.65em;
		}

		&:valid,
		&:focus {
			border: 1px solid #dba632;
		}
	}

	input[type='date'] {
		color: transparent;

		&:focus,
		&:valid {
			color: #f7f7f7;
		}
	}
	input[type='time'] {
		color: transparent;

		&:focus,
		&:valid {
			color: #f7f7f7;
		}
	}
`;
