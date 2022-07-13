import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	html {
		font-size: 16px;
	}

	body {
		height: 100vh;
		margin: 0;
		overflow-y: scroll;
		background-attachment: fixed;
		background-color: #080710;
		background-image: linear-gradient(33deg, #293133 0%, rgba(0,128,255,0.5) 50%, #293133 100%);
		background-repeat: no-repeat;
		background-size: cover;
		font-family: 'Poppins', sans-serif;
		font-size: 1rem;
		letter-spacing: 0.5px;
		
	
	}
`;
