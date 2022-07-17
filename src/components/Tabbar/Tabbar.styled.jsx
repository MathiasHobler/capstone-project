import styled from 'styled-components';

export const Button = styled.button`
	width: 50%;
	border: none;
	border-bottom: 2px solid rgba(255, 255, 255, 0.3);
	outline: none;
	background: rgba(0, 0, 0, 0.2);
	box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
	color: ${props => (props.tab ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.25)')};
`;

export const TabbarContainer = styled.section`
	display: flex;
	position: fixed;
	z-index: 200;
	width: 100vw;
	height: 3.5em;
	background: rgba(0, 0, 0, 0.2);
	backdrop-filter: blur(20px);
`;
