import TabbarContainer from './Tabbar.styled';

const Tabbar = ({tab}) => {
	return (
		<TabbarContainer>
			<button onClick={tab}>SAVED</button>
			<button onClick={tab}>GOING</button>
		</TabbarContainer>
	);
};

export default Tabbar;
