import styled from 'styled-components';

const TabbarContainer = styled.section`
	display: flex;
	position: fixed;
	z-index: 200;
	width: 100vw;
	height: 3.5em;
	backdrop-filter: blur(20px);

	button {
		width: 50%;
		border: none;
		border-bottom: 2px solid rgba(255, 255, 255, 0.3);
		outline: none;
		background: rgba(255, 255, 255, 0.06);
		box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
		color: white;
	}
`;

export default TabbarContainer;
