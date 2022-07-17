import {TabbarContainer, Button} from './Tabbar.styled';

const Tabbar = ({tab}) => {
	return (
		<TabbarContainer>
			<Button onClick={() => tab('saved')}>SAVED</Button>
			<Button onClick={() => tab('going')}>GOING</Button>
		</TabbarContainer>
	);
};

export default Tabbar;
