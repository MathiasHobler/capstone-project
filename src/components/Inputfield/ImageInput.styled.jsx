import styled, {css} from 'styled-components';

export const ImageContainer = styled.div`
	position: relative;
	width: 16em;

	label {
		margin-top: 1rem;
		padding: 0.5rem;
		transition: 0.5s;
		border-radius: 0.3rem;
		${props => css`
			color: ${props.isActive ? 'white' : 'rgba(255, 255, 255, 0)'};
		`}
		font-family: sans-serif;
		font-size: 0.8em;
		text-transform: uppercase;
		cursor: pointer;
	}

	section {
		padding: 0.625em;
		transition: 0.5s;
		border: 1px solid rgba(255, 255, 255, 0.25);
		border-radius: 5px;
		outline: none;
		background-color: transparent;
		color: rgb(255, 255, 255);
		font-size: 1em;
		scrollbar-color: #00dfc4 #6b0b0b;
	}

	span {
		position: absolute;
		z-index: 10;
		left: 7px;
		transition: 0.5s;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
		text-transform: uppercase;
		pointer-events: none;
		${props =>
			css`
				padding: ${props.isActive ? '0 10px' : '0'};
				transform: ${props.isActive ? 'translateX(10px) translateY(-14px)' : ''};
				border-right: ${props.isActive ? '1px solid #1d2b3a' : ''};
				border-left: ${props.isActive ? '1px solid #1d2b3a' : ''};
				border-radius: ${props.isActive ? '5px' : ''};
				background: ${props.isActive ? '#00dfc4' : ''};
				color: ${props.isActive ? '#1d2b3a' : 'rgba(255, 255, 255, 0.25)'};
				font-size: ${props.isActive ? '0.65em' : '1em'};
			`}
	}

	input {
		width: 100%;
		padding: 0.625em;
		transition: 0.5s;
		border-radius: 5px;
		outline: none;
		background: transparent;
		color: rgb(255, 255, 255);
		font-size: 1em;
		scrollbar-color: #00dfc4 #6b0b0b;
		${props => css`
			border: ${props.isActive
				? '1px solid #00dfc4 '
				: '1px solid rgba(255, 255, 255, 0.25)'};
		`}
	}
`;
