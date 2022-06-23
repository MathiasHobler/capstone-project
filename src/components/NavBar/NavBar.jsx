import {Add, Home} from '@mui/icons-material';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

function NavBar() {
	return (
		<NavContainer>
			<NavLink to="/" data-testid="navHome">
				<Home />
			</NavLink>
			<NavLink to="/create" data-testid="navHome">
				<Add />
			</NavLink>
		</NavContainer>
	);
}

export default NavBar;

const NavContainer = styled.section`
	width: 70%;
	margin-left: 15%;
	height: 5%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	position: fixed;
	bottom: 0;
	background-color: yellowgreen;

	a {
		text-decoration: none;
		color: black;

		&:hover {
			transform: scale(1.5);
			transition: 400ms;
			color: hotpink;
		}
		&.active div {
			margin-top: 5px;
			margin: auto;
			height: 5px;
			width: 5px;
			border-radius: 50%;
			background-color: black;
		}
	}
`;
