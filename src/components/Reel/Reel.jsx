import {
	AllInclusive,
	Nightlife,
	Pets,
	LightMode,
	OutdoorGrill,
	Restaurant,
	SportsScore,
	FamilyRestroom,
	Campaign,
	MusicNote,
} from '@mui/icons-material';
import {useState} from 'react';

import useStore from '../../hooks/useStore';

import ReelBody from './Reel.styled';

function Reel() {
	const active = useStore(state => state.active);
	const setActive = useStore(state => state.setActive);

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
					<Campaign
						fontSize={'large'}
						onClick={() => {
							setActive('woman');
						}}
					/>
					<p>Protest</p>
				</article>
				<article>
					<MusicNote
						fontSize={'large'}
						onClick={() => {
							setActive('man');
						}}
					/>
					<p>Concert</p>
				</article>
			</ReelBody>
		</>
	);
}

export default Reel;
