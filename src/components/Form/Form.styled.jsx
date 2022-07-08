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
	margin-top: 3em;
	border: 2px solid rgba(255, 255, 255, 0.1);
	border-radius: 1.5em;
	background: rgba(255, 255, 255, 0.06);
	box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
	backdrop-filter: -webkit-blur(10px);
	backdrop-filter: -moz-blur(10px);
	backdrop-filter: -ms-blur(10px);
	backdrop-filter: blur(10px);

	p {
		position: absolute;
		top: 50px;
		color: red;
	}

	h3 {
		position: absolute;
		top: 5px;
		color: white;
		font-size: 32px;
		font-weight: 500;
		line-height: 42px;
		text-align: center;
	}

	article {
		display: flex;
		position: relative;
		bottom: -13em;
		justify-content: space-around;
		background: transparent;

		button {
			margin: 0 3em;
			border: none;
			outline: none;
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

	section {
		display: flex;
		position: relative;
		top: -12em;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1.5em;
		article {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 4em;
			height: 4em;
			margin-left: 0.7em;
			padding: 1em;
			border-radius: 1em;
			background: transparent;
			box-shadow: inset 0 0 50px 5px #00dfc4;
			size: large;
			color: #00dfc4;

			p {
				margin-top: 0.75em;
			}
		}

		article:nth-child(1) {
			transition: 1s;
			box-shadow: ${props =>
				props.active === 'day'
					? 'inset 0 0 15px 3px #FF5F1F'
					: 'inset 0 0 15px 3px #00dfc4'};
			color: ${props => (props.active === 'day' ? '#FF5F1F' : '')};
		}
		article:nth-child(2) {
			transition: 1s;
			box-shadow: ${props =>
				props.active === 'night'
					? 'inset 0 0 15px 3px #FF5F1F'
					: 'inset 0 0 15px 3px #00dfc4'};
			color: ${props => (props.active === 'night' ? '#FF5F1F' : '')};
		}
		article:nth-child(3) {
			transition: 1s;
			box-shadow: ${props =>
				props.active === 'pets'
					? 'inset 0 0 15px 3px #FF5F1F'
					: 'inset 0 0 15px 3px #00dfc4'};
			color: ${props => (props.active === 'pets' ? '#FF5F1F' : '')};
		}
		article:nth-child(4) {
			transition: 1s;
			box-shadow: ${props =>
				props.active === 'bbq'
					? 'inset 0 0 15px 3px #FF5F1F'
					: 'inset 0 0 15px 3px #00dfc4'};
			color: ${props => (props.active === 'bbq' ? '#FF5F1F' : '')};
		}
		article:nth-child(5) {
			transition: 1s;
			box-shadow: ${props =>
				props.active === 'dinner'
					? 'inset 0 0 15px 3px #FF5F1F'
					: 'inset 0 0 15px 3px #00dfc4'};
			color: ${props => (props.active === 'dinner' ? '#FF5F1F' : '')};
		}
		article:nth-child(6) {
			transition: 1s;
			box-shadow: ${props =>
				props.active === 'sport'
					? 'inset 0 0 15px 3px #FF5F1F'
					: 'inset 0 0 15px 3px #00dfc4'};
			color: ${props => (props.active === 'sport' ? '#FF5F1F' : '')};
		}
		article:nth-child(7) {
			transition: 1s;
			box-shadow: ${props =>
				props.active === 'family'
					? 'inset 0 0 15px 3px #FF5F1F'
					: 'inset 0 0 15px 3px #00dfc4'};
			color: ${props => (props.active === 'family' ? '#FF5F1F' : '')};
		}
		article:nth-child(8) {
			transition: 1s;
			box-shadow: ${props =>
				props.active === 'woman'
					? 'inset 0 0 15px 3px #FF5F1F'
					: 'inset 0 0 15px 3px #00dfc4'};
			color: ${props => (props.active === 'woman' ? '#FF5F1F' : '')};
		}
		article:nth-child(9) {
			transition: 1s;
			box-shadow: ${props =>
				props.active === 'man'
					? 'inset 0 0 15px 3px #FF5F1F'
					: 'inset 0 0 15px 3px #00dfc4'};
			color: ${props => (props.active === 'man' ? '#FF5F1F' : '')};
		}
	}
`;
