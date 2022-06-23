import {Helmet} from 'react-helmet';

import Layout from '../components/Layout';

export default function Create() {
	return (
		<Layout>
			<Helmet>
				<title key="title">Create</title>
				<meta key="description" name="description" content="About" />
			</Helmet>
			<h1>Create</h1>
		</Layout>
	);
}
