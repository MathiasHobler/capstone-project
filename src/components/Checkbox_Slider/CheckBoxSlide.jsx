import {useState} from 'react';

import {Toggle, Box, Slider, Text} from './CheckBoxSlider.styled';

function CheckBoxSlide({value, setValue}) {
	const [isChecked, setIsChecked] = useState(value);
	const handleCheck = e => {
		setIsChecked(!isChecked);
		setValue(e.target.checked);
	};
	return (
		<>
			<Toggle>
				<Box
					type="checkbox"
					isChecked={isChecked}
					onChange={handleCheck}
					data-testid="my-checkbox"
				/>
				<Slider isChecked={isChecked}></Slider>
				<Text isChecked={isChecked} data-testid="slider-text">
					{isChecked ? 'Public' : 'Private'}
				</Text>
			</Toggle>
		</>
	);
}

export default CheckBoxSlide;
