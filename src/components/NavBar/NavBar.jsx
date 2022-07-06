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
