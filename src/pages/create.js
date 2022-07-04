import {Helmet} from 'react-helmet';

import Form from '../components/Form/Form';
import Layout from '../components/Layout';

export default function Create() {
	return (
		<Layout>
			<Helmet>
				<title key="title">Create</title>
				<meta key="description" name="description" content="About" />
			</Helmet>
			<Form title={'Create your Event'} />
		</Layout>
	);
}
