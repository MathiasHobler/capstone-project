import styled from 'styled-components';

const DetailPOP = styled.div`
	width: 100%;
	height: 95%;

	display: flex;
	position: fixed;
	top: 0;
	left: 0;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0;
	z-index: 200;
	backdrop-filter: blur(20px);

	article {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 2em;
		border-radius: 1em;
		width: 80%;
		height: 80%;
		background-color: aqua;
		z-index: 400;
		box-shadow: 1em 1em 1em black;

		button {
			position: absolute;
			right: 2em;
			top: -0.8em;
			width: 2em;
			height: 2em;
			padding: 0.5em;
			font-size: 1em;
			border-radius: 60%;
			background-color: hotpink;
			box-shadow: 0em 0em 2em hotpink;
			color: aqua;
		}
	}
`;

export default DetailPOP;
