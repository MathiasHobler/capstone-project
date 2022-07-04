import styled from 'styled-components';

const NavContainer = styled.section`
	display: flex;
	position: fixed;
	bottom: 0;
	flex-direction: row;
	align-items: center;
	width: 100%;
	height: 8%;
	border-radius: 1.5em;
	background: rgba(255, 255, 255, 0.06);
	box-shadow: inset 0 0 42px -10px #00dfc4;
	backdrop-filter: -webkit-blur(10px);
	backdrop-filter: -moz-blur(10px);
	backdrop-filter: -ms-blur(10px);
	backdrop-filter: blur(10px);

	ul {
		display: flex;
		position: absolute;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
		width: 100%;
		height: 100%;
	}

	li {
		display: flex;
		position: relative;
		align-items: center;
		justify-content: center;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		list-style: none;

		a {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 50px;
			height: 50px;
			border: 1px solid rgba(255, 255, 255, 0.2);
			border-radius: 50%;
			color: inherit;
			text-decoration: none;
		}
		p {
			position: absolute;
			top: 33px;
			color: #00dfc4;
		}
	}

	li:nth-child(1) {
		top: ${props => (props.active === 'home' ? '-22px' : '0')};
		transition: 1s;
		box-shadow: ${props => (props.active === 'home' ? '0 0 30px #00dfc4' : '')};

		a:nth-child(1) {
			top: ${props => (props.active === 'home' ? '-22px' : '0')};
			transition: 1s;
			background: ${props => (props.active === 'home' ? '#00dfc4 ' : '')};
			box-shadow: ${props =>
				props.active === 'home'
					? 'inset 0px 0px 21px 23px #333333'
					: 'inset 0px 0px 21px 23px #333333'};
			color: ${props => (props.active === 'home' ? '#00dfc4' : '#fff')};
		}
	}

	li:nth-child(2) {
		top: ${props => (props.active === 'create' ? '-22px' : '0')};
		transition: 1s;
		box-shadow: ${props => (props.active === 'create' ? '0 0 30px #00dfc4' : '')};

		a:nth-child(1) {
			top: ${props => (props.active === 'create' ? '-22px' : '0')};
			transition: 1s;
			background: ${props => (props.active === 'create' ? '#00dfc4 ' : '')};
			box-shadow: ${props =>
				props.active === 'create'
					? 'inset 0px 0px 21px 23px #333333'
					: 'inset 0px 0px 21px 23px #333333'};
			color: ${props => (props.active === 'create' ? '#00dfc4' : '#fff')};
		}
	}

	li:nth-child(3) {
		top: ${props => (props.active === 'bookmark' ? '-22px' : '0')};
		transition: 1s;
		box-shadow: ${props => (props.active === 'bookmark' ? '0 0 30px #00dfc4' : '')};

		a:nth-child(1) {
			top: ${props => (props.active === 'bookmark' ? '-22px' : '0')};
			transition: 1s;
			background: ${props => (props.active === 'bookmark' ? '#00dfc4 ' : '')};
			box-shadow: ${props =>
				props.active === 'bookmark'
					? 'inset 0px 0px 21px 23px #333333'
					: 'inset 0px 0px 21px 23px #333333'};
			color: ${props => (props.active === 'bookmark' ? '#00dfc4' : '#fff')};
		}
	}
`;

export default NavContainer;
