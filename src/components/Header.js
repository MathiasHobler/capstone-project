import styled from 'styled-components';

import Reel from './Reel/Reel.jsx';

export default function Header() {
	return (
		<Heading>
			<Reel />
		</Heading>
	);
}

const Heading = styled.header`
	display: flex;
	position: fixed;
	z-index: 100;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 4.5em;
	background: transparent;
	backdrop-filter: blur(20px);
`;
