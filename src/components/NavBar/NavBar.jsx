import {Add, BookmarkAdded, Home} from '@mui/icons-material';
import {useState} from 'react';

import {useStep} from '../../hooks/useForm';

import {NavContainer, ItemList, ListItem, IconBTN, IconLabel, StyledNavlink} from './NavBar.styled';

function NavBar() {
	const [active, setActive] = useState('');
	const setAction = useStep(state => state.setAction);
	const setTitle = useStep(state => state.setTitle);

	const navRay = [
		{
			id: '1',
			linkTo: '/',
			icon: <Home />,
			label: 'Home',
		},
		{
			id: '2',
			linkTo: '/create',
			icon: <Add />,
			label: 'Create',
		},
		{
			id: '3',
			linkTo: '/bookmark',
			icon: <BookmarkAdded />,
			label: 'Bookmark',
		},
	];

	return (
		<>
			<NavContainer>
				<ItemList active={active} ident={navigator.linkTo}>
					{navRay.map(navigator => {
						return (
							<ListItem key={navigator.id}>
								<IconBTN active={active} ident={navigator.linkTo}>
									<StyledNavlink
										data-testid={navigator.label}
										to={navigator.linkTo}
										onClick={() => {
											setActive(navigator.linkTo);
											if (navigator.linkTo === '/create') {
												setAction('POST');
												setTitle('Create Event');
											}
										}}
									>
										{navigator.icon}
									</StyledNavlink>
									<IconLabel>{navigator.label}</IconLabel>
								</IconBTN>
							</ListItem>
						);
					})}
				</ItemList>
			</NavContainer>
		</>
	);
}

export default NavBar;
