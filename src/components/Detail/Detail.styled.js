import styled from 'styled-components';

const DetailPOP = styled.div`
	display: flex;
	position: fixed;
	z-index: 200;
	top: 0;
	left: 0;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 95%;
	margin: 0;
	backdrop-filter: blur(20px);

	article {
		display: flex;
		position: relative;
		z-index: 400;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 80%;
		height: 80%;
		padding: 2em;
		border-radius: 1em;
		background-color: aqua;
		box-shadow: 1em 1em 1em black;

		button {
			position: absolute;
			top: -0.8em;
			right: 2em;
			width: 2em;
			height: 2em;
			padding: 0.5em;
			border-radius: 60%;
			background-color: hotpink;
			box-shadow: 0 0 2em hotpink;
			color: aqua;
			font-size: 1em;
		}
	}
`;

export default DetailPOP;
