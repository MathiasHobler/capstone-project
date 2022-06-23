import styled from 'styled-components';

const NavContainer = styled.section`
	display: flex;
	position: fixed;
	bottom: 0;
	align-items: center;
	justify-content: space-evenly;
	width: 70%;
	height: 5%;
	margin-left: 15%;
	background-color: yellowgreen;

	a {
		color: black;
		text-decoration: none;

		&:hover {
			transform: scale(1.5);
			transition: 400ms;
			color: hotpink;
		}
		&.active div {
			width: 5px;
			height: 5px;
			margin: auto;
			margin-top: 5px;
			border-radius: 50%;
			background-color: black;
		}
	}
`;

export default NavContainer;
