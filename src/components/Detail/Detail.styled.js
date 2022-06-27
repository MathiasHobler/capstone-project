import styled from 'styled-components';

const DetailPOP = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	position: fixed;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0;
	z-index: 200;
	backdrop-filter: blur(20px);

	article {
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
	}
`;

export default DetailPOP;
