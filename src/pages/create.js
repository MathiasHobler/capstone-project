import {Helmet} from 'react-helmet';

import Background from '../components/Background/Background';
import Form from '../components/Form/Form';
import Layout from '../components/Layout';

export default function Create() {
	return (
		<Layout>
			<Helmet>
				<title key="title">Create</title>
				<meta key="description" name="description" content="About" />
			</Helmet>
			<Form />
		</Layout>
	);
}
