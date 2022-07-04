import styled from 'styled-components';

export const FormContainer = styled.form`
	display: flex;
	position: relative;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2em;
	width: 80%;
	height: 32em;
	margin: auto;
	margin-top: 1em;
	border: 2px solid rgba(255, 255, 255, 0.1);
	border-radius: 1.5em;
	background: rgba(255, 255, 255, 0.06);
	box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
	backdrop-filter: -webkit-blur(10px);
	backdrop-filter: -moz-blur(10px);
	backdrop-filter: -ms-blur(10px);
	backdrop-filter: blur(10px);

	* {
		border: none;
		outline: none;
		color: white;
		font-family: 'Poppins', sans-serif;
		letter-spacing: 0.5px;
	}

	p {
		position: absolute;
		top: 50px;
		color: red;
	}

	h3 {
		position: absolute;
		top: 5px;
		font-size: 32px;
		font-weight: 500;
		line-height: 42px;
		text-align: center;
	}

	article {
		display: flex;
		position: relative;
		bottom: -13em;
		flex-direction: row;
		justify-content: space-around;
		background: transparent;

		button {
			margin: 0 3em;
			background: #00dfc4;
		}
	}
`;

export const Container = styled.section`
	display: flex;
	position: absolute;
	top: 4em;
	flex-direction: column;
	align-content: flex-end;
	gap: 1em;
	margin-top: 1em;
`;
