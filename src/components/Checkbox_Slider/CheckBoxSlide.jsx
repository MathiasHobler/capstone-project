import './styles.css';
import {useState} from 'react';
import styled, {css} from 'styled-components';

export default function CheckboxSlide() {
	const [isChecked, setIsChecked] = useState(false);
	const handleCheck = () => setIsChecked(!isChecked);
	return (
		<div className="App">
			<h1>CSS Toggle Switch With Text</h1>
			<Toggle>
				<Box type="checkbox" isChecked={isChecked} onChange={handleCheck} />
				<Slider isChecked={isChecked}></Slider>
				<Text isChecked={isChecked}>{isChecked ? 'Public' : 'Private'}</Text>
			</Toggle>
		</div>
	);
}

const Toggle = styled.label`
	--width: 80px;
	--height: calc(var(--width) / 3);

	position: relative;
	display: inline-block;
	width: var(--width);
	height: var(--height);
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
	border-radius: var(--height);
	cursor: pointer;
`;

const Box = styled.input`
	display: none;
`;

const Slider = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: var(--height);
	background-color: #ccc;
	transition: all 0.4s ease-in-out;
	${props => css`
		background: ${props.isChecked ? 'transparent' : 'rgba(	57, 255, 20,0.5)'};
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
		border-radius: calc(var(--height) / 2);
		background-color: #fff;
		box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
		transition: all 0.4s ease-in-out;
	}
`;
const Text = styled.span`
    
    position: absolute;
    top:2.5px;
    ${props => css`
		left: ${props.isChecked ? '' : '5px'};
	`};
    ${props => css`
		right: ${props.isChecked ? '5px' : ''};
	`};
    color: #4d4d4d;
    opacity: 1;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
    transition: all 0.4s ease-in-out;
  }
`;
