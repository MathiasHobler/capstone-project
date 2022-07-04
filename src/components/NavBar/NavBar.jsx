import {Add, Home} from '@mui/icons-material';
import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

import NavContainer from './NavBar.styled';

function NavBar() {
	const [active, setActive] = useState(0);
	return (
		<>
			{/* <ContainerDiv /> */}
			<NavContainer active={active}>
				<ul>
					<li
						onClick={() => {
							setActive(1);
						}}
					>
						<NavLink to="/" data-testid="navHome">
							<Home />
						</NavLink>
						<p>Home</p>
					</li>
					<li
						onClick={() => {
							setActive(2);
						}}
					>
						<NavLink to="/create" data-testid="navCreate">
							<Add />
						</NavLink>
						<p>Create</p>
					</li>
				</ul>
			</NavContainer>
		</>
	);
}

export default NavBar;

// const ContainerDiv = styled.div`
// 	position: fixed;
// 	bottom: 30px;
// 	left: 50px;
// 	width: 70px;
// 	height: 70px;
// 	border: 2px solid rgba(255, 255, 255, 0.1);
// 	border-radius: 50%;
// 	background: rgba(255, 255, 255, 0.06);
// 	//box-shadow: 0 0 40px rgba(8, 7, 16, 0.06);
// 	backdrop-filter: -webkit-blur(10px);
// 	backdrop-filter: -moz-blur(10px);
// 	backdrop-filter: -ms-blur(10px);
// 	backdrop-filter: blur(10px);
// 	z-index: 3;
// `;
