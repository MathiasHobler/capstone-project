import styled from 'styled-components';

const ReelBody = styled.section`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: min(100% - 2rem);
	height: 4em;
	margin: 0 auto;
	margin-bottom: 1em;
	overflow: hidden;
	overflow-x: scroll;
	border-radius: 1em;
	background: transparent;
	scrollbar-width: 0;

	article {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 4em;
		height: 4em;
		margin-left: 0.7em;
		padding: 1em;
		border-radius: 1em;
		background: transparent;
		box-shadow: inset 0 0 50px 5px #00dfc4;
		size: large;
		color: #00dfc4;
	}

	article:nth-child(1) {
		transition: 1s;
		box-shadow: ${props =>
			props.active === 'all' ? 'inset 0 0 15px 3px #FF5F1F' : 'inset 0 0 15px 3px #00dfc4'};
		color: ${props => (props.active === 'all' ? '#FF5F1F' : '')};
	}
	article:nth-child(2) {
		transition: 1s;
		box-shadow: ${props =>
			props.active === 'day' ? 'inset 0 0 15px 3px #FF5F1F' : 'inset 0 0 15px 3px #00dfc4'};
		color: ${props => (props.active === 'day' ? '#FF5F1F' : '')};
	}
	article:nth-child(3) {
		transition: 1s;
		box-shadow: ${props =>
			props.active === 'night' ? 'inset 0 0 15px 3px #FF5F1F' : 'inset 0 0 15px 3px #00dfc4'};
		color: ${props => (props.active === 'night' ? '#FF5F1F' : '')};
	}
	article:nth-child(4) {
		transition: 1s;
		box-shadow: ${props =>
			props.active === 'pets' ? 'inset 0 0 15px 3px #FF5F1F' : 'inset 0 0 15px 3px #00dfc4'};
		color: ${props => (props.active === 'pets' ? '#FF5F1F' : '')};
	}
	article:nth-child(5) {
		transition: 1s;
		box-shadow: ${props =>
			props.active === 'bbq' ? 'inset 0 0 15px 3px #FF5F1F' : 'inset 0 0 15px 3px #00dfc4'};
		color: ${props => (props.active === 'bbq' ? '#FF5F1F' : '')};
	}
	article:nth-child(6) {
		transition: 1s;
		box-shadow: ${props =>
			props.active === 'dinner'
				? 'inset 0 0 15px 3px #FF5F1F'
				: 'inset 0 0 15px 3px #00dfc4'};
		color: ${props => (props.active === 'dinner' ? '#FF5F1F' : '')};
	}
	article:nth-child(7) {
		transition: 1s;
		box-shadow: ${props =>
			props.active === 'sport' ? 'inset 0 0 15px 3px #FF5F1F' : 'inset 0 0 15px 3px #00dfc4'};
		color: ${props => (props.active === 'sport' ? '#FF5F1F' : '')};
	}
	article:nth-child(8) {
		transition: 1s;
		box-shadow: ${props =>
			props.active === 'family'
				? 'inset 0 0 15px 3px #FF5F1F'
				: 'inset 0 0 15px 3px #00dfc4'};
		color: ${props => (props.active === 'family' ? '#FF5F1F' : '')};
	}
	article:nth-child(9) {
		transition: 1s;
		box-shadow: ${props =>
			props.active === 'woman' ? 'inset 0 0 15px 3px #FF5F1F' : 'inset 0 0 15px 3px #00dfc4'};
		color: ${props => (props.active === 'woman' ? '#FF5F1F' : '')};
	}
	article:nth-child(10) {
		transition: 1s;
		box-shadow: ${props =>
			props.active === 'man' ? 'inset 0 0 15px 3px #FF5F1F' : 'inset 0 0 15px 3px #00dfc4'};
		color: ${props => (props.active === 'man' ? '#FF5F1F' : '')};
	}
`;

export default ReelBody;
