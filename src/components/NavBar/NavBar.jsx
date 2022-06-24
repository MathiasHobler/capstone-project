import {Add, Home} from '@mui/icons-material';
import {NavLink} from 'react-router-dom';

import NavContainer from './NavBar.styled';

function NavBar() {
	return (
		<NavContainer>
			<NavLink to="/" data-testid="navHome">
				<Home />
			</NavLink>
			<NavLink to="/create" data-testid="navCreate">
				<Add />
			</NavLink>
		</NavContainer>
	);
}

export default NavBar;
