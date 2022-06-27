import {Add, Home} from '@mui/icons-material';
import {NavLink} from 'react-router-dom';

import NavContainer from './NavBar.styled';

function NavBar() {
	return (
		<NavContainer>
			<NavLink to="/" data-testid="navHome">
				<Home />
				<div></div>
			</NavLink>
			<NavLink to="/create" data-testid="navCreate">
				<Add />
				<div></div>
			</NavLink>
		</NavContainer>
	);
}

export default NavBar;
