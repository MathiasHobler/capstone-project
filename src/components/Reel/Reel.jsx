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

import useStore from '../../hooks/useStore';

import {ReelBody, IconFrame, IconLabel} from './Reel.styled';

const iconray = [
	{id: 0, name: 'All', icon: AllInclusive, categorie: 'all'},
	{id: 1, name: 'Day', icon: LightMode, categorie: 'day'},
	{id: 2, name: 'Pets', icon: Pets, categorie: 'pets'},
	{id: 3, name: 'Night', icon: Nightlife, categorie: 'night'},
	{id: 4, name: 'BBQ', icon: OutdoorGrill, categorie: 'bbq'},
	{id: 5, name: 'Dinner', icon: Restaurant, categorie: 'dinner'},
	{id: 6, name: 'Sport', icon: SportsScore, categorie: 'sport'},
	{id: 7, name: 'Family', icon: FamilyRestroom, categorie: 'family'},
	{id: 8, name: 'Protest', icon: Campaign, categorie: 'demo'},
	{id: 9, name: 'Concert', icon: MusicNote, categorie: 'concert'},
];

function Reel() {
	const active = useStore(state => state.active);
	const setActive = useStore(state => state.setActive);

	return (
		<ReelBody>
			{iconray.map(icon => {
				const zustand = icon.categorie;
				return (
					<IconFrame
						type="button"
						isActive={active}
						zustand={zustand}
						key={icon.id}
						fontSize={'large'}
						onClick={() => {
							setActive(icon.categorie);
						}}
					>
						<icon.icon />
						<IconLabel>{icon.name}</IconLabel>
					</IconFrame>
				);
			})}
		</ReelBody>
	);
}

export default Reel;
