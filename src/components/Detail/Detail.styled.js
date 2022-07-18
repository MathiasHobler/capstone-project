import styled from 'styled-components';

export const DetailContainer = styled.article`
	display: flex;
	position: relative;
	width: min(100% - 2rem);
	height: min(100% - 10rem);
	margin: auto;
	padding: 1.5em;
	overflow: hidden;
	overflow: scroll;
	border: 2px solid rgba(255, 255, 255, 0.1);
	border-radius: 1.5em;
	background: rgba(0, 128, 255, 0.2);
	box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
	color: white;
	list-style: none;
	backdrop-filter: -webkit-blur(10px);
	backdrop-filter: -moz-blur(10px);
	backdrop-filter: -ms-blur(10px);
	backdrop-filter: blur(10px);
`;

export const ToolBTN = styled.button`
	display: flex;
	position: absolute;
	top: 0;
	right: 0.25em;
	align-items: center;
	justify-content: center;
	width: 2em;
	height: 2em;
	padding: 0.5em;
	border: none;
	background-color: transparent;
	font-size: 1em;

	svg {
		color: rgba(255, 255, 255, 0.5);
	}
	&:nth-child(2) {
		top: 0.75em;
		left: 1.5em;
		svg {
			color: rgba(255, 255, 255, 0.8);
		}
	}
	&:nth-child(3) {
		top: 5em;
		right: -0.1em;
	}
`;

export const Img = styled.img`
	width: 100%;
	height: 10em;
	margin-bottom: 0.5em;
	border-top-left-radius: 1.5em;
	border-top-right-radius: 1.5em;
`;

export const Iframe = styled.iframe`
	margin-top: 0.25em;
	margin-bottom: 1.5em;
	border-radius: 1.5em;
`;

export const InfoContainer = styled.section`
	align-items: center;
	justify-content: center;
	padding-bottom: 1.5em;

	h2 {
		max-width: 10em;
		margin-bottom: 0.5em;
		text-align: left;
		overflow-wrap: break-word;
	}

	h3 {
		margin: 1em 0;
	}

	p {
		max-width: 18em;
		margin-bottom: 0.25em;
		overflow-wrap: break-word;
	}
`;

export const DetailPOP = styled.section`
	display: flex;
	position: fixed;
	z-index: 10;
	top: 0;
	left: 0;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	max-width: 550px;
	height: 100%;
	margin: 0;

	a {
		position: absolute;
		z-index: 20;
		top: 12em;
		right: -0.1em;
		color: rgba(255, 255, 255, 0.5);
		text-decoration: none;
	}
`;
