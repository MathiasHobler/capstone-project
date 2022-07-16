import {
	LightMode,
	Nightlife,
	Pets,
	OutdoorGrill,
	Restaurant,
	SportsScore,
	FamilyRestroom,
	Campaign,
	MusicNote,
} from '@mui/icons-material';

import {useCreate} from '../../hooks/useForm';
import {toggleFilter} from '../../utils/unit';

import {Container, DialField, Iconframe, IconLabel} from './Form.styled';

const Icons = [
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

const FormAddCategorie = () => {
	const newEvent = useCreate(state => state.event);
	const setNewEvent = useCreate(state => state.setNewEvent);

	return (
		<Container>
			<DialField active={Icons[5].categorie}>
				{Icons.map(icon => {
					const isActive = newEvent.categories.includes(icon.categorie);
					return (
						<Iconframe
							type="button"
							key={icon.id}
							isActive={isActive}
							onClick={() => {
								toggleFilter(isActive, setNewEvent, newEvent, icon);
							}}
						>
							<icon.icon fontSize={'large'} />
							<IconLabel>{icon.name}</IconLabel>
						</Iconframe>
					);
				})}
			</DialField>
		</Container>
	);
};

export default FormAddCategorie;
