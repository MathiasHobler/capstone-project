import {Helmet} from 'react-helmet';
import styled from 'styled-components';

import Layout from '../components/Layout';
import NavBar from '../components/NavBar/NavBar';

export default function AboutPage() {
	return (
		<Layout>
			<Helmet>
				<title key="title">Create</title>
				<meta key="description" name="description" content="About" />
			</Helmet>
			<h1>Create</h1>
			<Dummy>
				<h3>Create Dummy</h3>
			</Dummy>
			<NavBar />
		</Layout>
	);
}

const Dummy = styled.div`
	width: 70%;
	height: 70vh;
	background-color: lightcoral;
	box-shadow: 1em 1em 1em;
	margin: 2em auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
