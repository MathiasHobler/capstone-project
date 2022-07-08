import {Helmet} from 'react-helmet';

import Footer from '../components/Footer';
import Form from '../components/Form/Form';

export default function Create() {
	return (
		<>
			<Helmet>
				<title key="title">Create</title>
				<meta key="description" name="description" content="About" />
			</Helmet>
			<Form title={'Create your Event'} />
			<Footer />
		</>
	);
}
