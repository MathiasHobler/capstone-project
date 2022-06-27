import React from 'react';

import DetailPOP from './Detail.styled';

const Detail = () => {
	return (
		<DetailPOP className="background">
			<article>
				<button>Back</button>
				<h2>Test Popup</h2>
				<p>01.01.2022</p>
				<p>test test test test test test test test</p>
				<iframe
					src="https://maps.google.com/maps?q=neuefische&t=&z=13&ie=UTF8&iwloc=&output=embed"
					width="100%"
					height="200"
				/>
			</article>
		</DetailPOP>
	);
};

export default Detail;
