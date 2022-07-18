import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const ItemList = styled.ul`
	display: flex;
	position: absolute;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	width: 100vw;
	max-width: 550px;
	height: 100%;
`;

const ListItem = styled.li`
	display: flex;
	position: relative;
	top: -40;
	align-items: center;
	justify-content: center;
	width: 4.5em;
	height: 4.5em;
	background: transparent;
	list-style: none;
`;
const IconLabel = styled.p`
	position: absolute;
	top: 5.1em;
	color: white;
`;
const IconBTN = styled.button`
	display: flex;
	position: absolute;
	top: ${props => (props.active === props.ident ? '-20%' : '')};
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 4.5em;
	height: 4.5em;
	padding: 1em;
	transition: 800ms;
	border-radius: 1em;
	background: rgba(0, 0, 0, 0.4);
	box-shadow: ${props =>
		props.active === props.ident
			? 'inset 0 0 10px 2px rgba(255,255,255,1)'
			: 'inset 0 0 10px 2px rgba(255,255,255,0.3)'};
`;
const StyledNavlink = styled(NavLink)`
	transition: 600ms;
	color: ${props =>
		props.active === props.ident ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.3)'};
`;
const NavContainer = styled.section`
	display: flex;
	position: fixed;
	z-index: 5;
	bottom: 0;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 4.5em;
	background: rgba(0, 0, 0, 0.2);
	backdrop-filter: -webkit-blur(10px);
	backdrop-filter: -moz-blur(10px);
	backdrop-filter: -ms-blur(10px);
	backdrop-filter: blur(10px);
`;

export {NavContainer, ItemList, ListItem, IconBTN, IconLabel, StyledNavlink};
