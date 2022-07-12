import {Helmet} from 'react-helmet';

import Form from '../components/Form/Form';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar/NavBar';

export default function Create() {
	return (
		<>
			<Helmet>
				<title key="title">Create</title>
				<meta key="description" name="description" content="About" />
			</Helmet>
			<Form />
			<NavBar />
		</>
	);
}
