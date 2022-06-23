import {Helmet} from 'react-helmet';

import Layout from '../components/Layout';
import NavBar from '../components/NavBar/NavBar';

export default function HomePage() {
	return (
		<Layout>
			<Helmet>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
			<h1>Home</h1>
		</Layout>
	);
}
