import styled from 'styled-components';

const StyledButton = styled.button`
	display: inline-block;
	position: relative;
	margin: 15px;
	/* padding: 1em 3em; */
	border: none;
	border-radius: 50px;
	background: none;

	div {
		display: flex;
		position: absolut;
		z-index: 5;
		top: 0;
		left: 0;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		padding: 1em 1em;
		overflow: hidden;
		transition: all 0.3s ease-in-out;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 30px;
		background: rgba(255, 255, 255, 0.05);
		box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
		color: white;
		font-weight: 400;
		letter-spacing: 1px;
		text-decoration: none;
		text-transform: uppercase;
		backdrop-filter: blur(15px);
	}

	/* &:hover div {
		letter-spacing: 2px;
	} */

	div::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 50%;
		height: 100%;
		transform: skewX(40deg) translateX(0);
		transition: all 0.5s ease-out;
		background: linear-gradient(to left, rgba(255, 255, 255, 0.15), transparent);
	}

	&:hover div::before {
		transform: skewX(40deg) translateX(200%);
	}
	/* 
	&::before,
	&::after {
		content: '';
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		width: 59%;
		height: 10px;
		border-radius: 10px;
		background: #f00;
		transition: all 0.4s ease-in-out;
		transition-delay: 0s;
	}

	&::before {
		bottom: -5px;
	}

	&::after {
		top: -5px;
	} */

	/* &:hover::before,
	&:hover::after {
		height: 50%;
		width: 80%;
		border-radius: 30px;
		transition-delay: 0.3s;
	} */

	/* &:hover::before {
		bottom: 0;
	}

	&:hover::after {
		top: 0;
	} */

	/* &::before,
	&::after {
		position: absolute;
		z-index: -5;
		background: #ff7979;
		box-shadow: 0 0 5px #ff7979, 0 0 15px #ff7979, 0 0 30px #ff7979, 0 0 60px #ff7979;
	} */
`;

export default StyledButton;
