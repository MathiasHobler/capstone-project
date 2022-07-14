import TabbarContainer from './Tabbar.styled';

const Tabbar = ({tab}) => {
	return (
		<TabbarContainer>
			<button onClick={() => tab('saved')}>SAVED</button>
			<button onClick={() => tab('going')}>GOING</button>
		</TabbarContainer>
	);
};

export default Tabbar;
