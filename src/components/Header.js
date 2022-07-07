import styled from 'styled-components';

import Reel from './Reel/Reel.jsx';

export default function Header() {
	return (
		<Heading>
			{/* <div></div> */}
			<Reel />
			{/* <div></div> */}
		</Heading>
	);
}

const Heading = styled.header`
	display: flex;
	position: fixed;
	z-index: 100;
	flex-wrap: nowrap;
	width: 100%;
	height: 4em;
	background: transparent;
	backdrop-filter: blur(20px);

	div {
		width: 12%;
		height: inherit;
		background: transparent;
	}

	div:first-of-type {
		box-shadow: inset -40px 0 29px -30px #00dfc4;
	}

	div:last-of-type {
		box-shadow: inset 40px 0 29px -30px #00dfc4;
	}
`;
