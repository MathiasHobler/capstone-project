import styled, {css} from 'styled-components';

export const Toggle = styled.label`
	--width: 90px;
	--height: calc(var(--width) / 3);

	display: inline-block;
	position: relative;
	width: var(--width);
	height: var(--height);
	border-radius: var(--height);
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
	cursor: pointer;
`;

export const Box = styled.input`
	display: none;
`;

export const Slider = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	transition: all 0.8s ease-in-out;
	border: 1px solid rgba(255, 255, 255, 0.25);
	border-radius: var(--height);
	${props => css`
		background: ${props.isChecked ? 'rgba(	255, 255, 255,0.1)' : 'rgba(	255, 255, 255,0.1)'};
	`};

	&::before {
		content: '';
		position: absolute;
		top: 0;
		${props => css`
			left: ${props.isChecked ? '0' : ''};
		`};
		${props => css`
			right: ${props.isChecked ? '' : '0'};
		`};
		width: calc(var(--height));
		height: calc(var(--height));
		transition: all 0.4s ease-in-out;
		border-radius: calc(var(--height) / 2);
		background-color: rgba(255, 255, 255, 0.25);
	}
`;
export const Text = styled.span`
	position: absolute;
	top: 8px;
	transition: all 0.4s ease-in-out;
	opacity: 1;
	color: #dba632;
	text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
	${props => css`
		left: ${props.isChecked ? '' : '5px'};
	`};
	${props => css`
		right: ${props.isChecked ? '5px' : ''};
	`};
`;
