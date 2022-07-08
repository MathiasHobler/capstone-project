import styled from 'styled-components';

import ImageUpload from '../components/Inputfield/ImageInput';
const Test = () => {
	return (
		<TestContainer>
			<h1>test</h1>
			<ImageUpload />
		</TestContainer>
	);
};

export default Test;

const TestContainer = styled.div`
	h1 {
		color: white;
	}
`;
