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
import {useEffect, useState} from 'react';

import {useCreate} from '../../hooks/useForm';

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
	const [active, setActive] = useState('');
	const newEvent = useCreate(state => state.event);
	const setNewEvent = useCreate(state => state.setNewEvent);

	const categorieArray = [newEvent.categories];

	useEffect(() => {
		console.log(categorieArray);
	}, [newEvent]);

	return (
		<Container>
			<DialField active={Icons[5].categorie}>
				{Icons.map(icon => {
					const isActive = newEvent.categories.includes(icon.categorie);
					return (
						<Iconframe
							key={icon.id}
							isActive={isActive}
							onClick={() => {
								if (isActive) {
									setNewEvent({
										...newEvent,
										categories: newEvent.categories.filter(categorie => {
											return categorie !== icon.categorie;
										}),
									});
								} else {
									setNewEvent({
										...newEvent,
										categories: [...newEvent.categories, icon.categorie],
									});
								}
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
