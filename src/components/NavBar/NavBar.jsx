import {Add, BookmarkAdded, Home} from '@mui/icons-material';
import {useState} from 'react';
import {NavLink} from 'react-router-dom';

import {useStep} from '../../hooks/useForm';

import NavContainer from './NavBar.styled';

function NavBar() {
	const [active, setActive] = useState('');
	const setAction = useStep(state => state.setAction);
	const setTitle = useStep(state => state.setTitle);
	setAction('create');
	setTitle('Create Event');
	return (
		<>
			<NavContainer active={active}>
				<ul>
					<li
						onClick={() => {
							setActive('home');
						}}
					>
						<NavLink to="/" data-testid="navHome">
							<Home />
						</NavLink>
						<p>Home</p>
					</li>
					<li
						onClick={() => {
							setActive('create');
						}}
					>
						<NavLink to="/create" data-testid="navCreate">
							<Add />
						</NavLink>
						<p>Create</p>
					</li>
					<li
						onClick={() => {
							setActive('bookmark');
						}}
					>
						<NavLink to="/bookmark" data-testid="navBookmark">
							<BookmarkAdded />
						</NavLink>
						<p>Bookmarked</p>
					</li>
				</ul>
			</NavContainer>
		</>
	);
}

export default NavBar;
