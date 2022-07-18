import {useState} from 'react';

import {TabbarContainer, Button} from './Tabbar.styled';

const Tabbar = ({setTab}) => {
	const [isActive, setIsActive] = useState(true);
	return (
		<TabbarContainer>
			<Button
				tab={isActive}
				onClick={() => {
					setTab('saved');
					setIsActive(!isActive);
				}}
			>
				SAVED
			</Button>
			<Button
				tab={!isActive}
				onClick={() => {
					setTab('going');
					setIsActive(!isActive);
				}}
			>
				GOING
			</Button>
		</TabbarContainer>
	);
};

export default Tabbar;
