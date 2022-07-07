import {
	AllInclusive,
	Nightlife,
	Pets,
	LightMode,
	OutdoorGrill,
	Restaurant,
	SportsScore,
	FamilyRestroom,
	Woman,
	Man,
} from '@mui/icons-material';
import {useState} from 'react';

import ReelBody from './Reel.styled';

function Reel() {
	const [active, setActive] = useState('');
	return (
		<>
			<ReelBody active={active}>
				<article>
					<AllInclusive
						fontSize={'large'}
						onClick={() => {
							setActive('all');
						}}
					/>
					<p>All</p>
				</article>
				<article>
					<LightMode
						fontSize={'large'}
						onClick={() => {
							setActive('day');
						}}
					/>
					<p>Day</p>
				</article>
				<article>
					<Nightlife
						fontSize={'large'}
						onClick={() => {
							setActive('night');
						}}
					/>
					<p>Night</p>
				</article>
				<article>
					<Pets
						fontSize={'large'}
						onClick={() => {
							setActive('pets');
						}}
					/>
					<p>Pets</p>
				</article>
				<article>
					<OutdoorGrill
						fontSize={'large'}
						onClick={() => {
							setActive('bbq');
						}}
					/>
					<p>BBQ</p>
				</article>
				<article>
					<Restaurant
						fontSize={'large'}
						onClick={() => {
							setActive('dinner');
						}}
					/>
					<p>Dinner</p>
				</article>
				<article>
					<SportsScore
						fontSize={'large'}
						onClick={() => {
							setActive('sport');
						}}
					/>
					<p>Sport</p>
				</article>
				<article>
					<FamilyRestroom
						fontSize={'large'}
						onClick={() => {
							setActive('family');
						}}
					/>
					<p>Family</p>
				</article>
				<article>
					<Woman
						fontSize={'large'}
						onClick={() => {
							setActive('woman');
						}}
					/>
					<p>Woman</p>
				</article>
				<article>
					<Man
						fontSize={'large'}
						onClick={() => {
							setActive('man');
						}}
					/>
					<p>Man</p>
				</article>
			</ReelBody>
		</>
	);
}

export default Reel;
