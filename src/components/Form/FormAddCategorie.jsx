import {
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
import {useEffect, useState} from 'react';

import {useCreate} from '../../hooks/useForm';

import {Container} from './Form.styled';

const FormAddCategorie = () => {
	const [active, setActive] = useState('');
	const newEvent = useCreate(state => state.event);
	const setNewEvent = useCreate(state => state.setNewEvent);

	useEffect(() => {
		console.log(newEvent);
	}, [newEvent]);

	return (
		<Container active={active}>
			<section>
				<article>
					<LightMode
						fontSize={'large'}
						onClick={() => {
							setActive('day');
							if (!newEvent.categories.includes('day')) {
								setNewEvent({
									...newEvent,
									categories: [...newEvent.categories, 'day'],
								});
							} else if (newEvent.categories.includes('day')) {
								setNewEvent({
									...newEvent,
									categories: newEvent.categories.filter(categorie => {
										return categorie !== 'day';
									}),
								});
							}
						}}
					/>
					<p>Day</p>
				</article>
				<article>
					<Nightlife
						fontSize={'large'}
						onClick={() => {
							setActive('night');
							if (!newEvent.categories.includes('night')) {
								setNewEvent({
									...newEvent,
									categories: [...newEvent.categories, 'night'],
								});
							} else if (newEvent.categories.includes('night')) {
								setNewEvent({
									...newEvent,
									categories: newEvent.categories.filter(categorie => {
										return categorie !== 'night';
									}),
								});
							}
						}}
					/>
					<p>Night</p>
				</article>
				<article>
					<Pets
						fontSize={'large'}
						onClick={() => {
							setActive('pets');
							if (!newEvent.categories.includes('pets')) {
								setNewEvent({
									...newEvent,
									categories: [...newEvent.categories, 'pets'],
								});
							} else if (newEvent.categories.includes('pets')) {
								setNewEvent({
									...newEvent,
									categories: newEvent.categories.filter(categorie => {
										return categorie !== 'pets';
									}),
								});
							}
						}}
					/>
					<p>Pets</p>
				</article>
				<article>
					<OutdoorGrill
						fontSize={'large'}
						onClick={() => {
							setActive('bbq');
							if (!newEvent.categories.includes('bbq')) {
								setNewEvent({
									...newEvent,
									categories: [...newEvent.categories, 'bbq'],
								});
							} else if (newEvent.categories.includes('bbq')) {
								setNewEvent({
									...newEvent,
									categories: newEvent.categories.filter(categorie => {
										return categorie !== 'bbq';
									}),
								});
							}
						}}
					/>
					<p>BBQ</p>
				</article>
				<article>
					<Restaurant
						fontSize={'large'}
						onClick={() => {
							setActive('dinner');
							if (!newEvent.categories.includes('dinner')) {
								setNewEvent({
									...newEvent,
									categories: [...newEvent.categories, 'dinner'],
								});
							} else if (newEvent.categories.includes('dinner')) {
								setNewEvent({
									...newEvent,
									categories: newEvent.categories.filter(categorie => {
										return categorie !== 'dinner';
									}),
								});
							}
						}}
					/>
					<p>Dinner</p>
				</article>
				<article>
					<SportsScore
						fontSize={'large'}
						onClick={() => {
							setActive('sport');
							if (!newEvent.categories.includes('sport')) {
								setNewEvent({
									...newEvent,
									categories: [...newEvent.categories, 'sport'],
								});
							} else if (newEvent.categories.includes('sport')) {
								setNewEvent({
									...newEvent,
									categories: newEvent.categories.filter(categorie => {
										return categorie !== 'sport';
									}),
								});
							}
						}}
					/>
					<p>Sport</p>
				</article>
				<article>
					<FamilyRestroom
						fontSize={'large'}
						onClick={() => {
							setActive('family');
							if (!newEvent.categories.includes('family')) {
								setNewEvent({
									...newEvent,
									categories: [...newEvent.categories, 'family'],
								});
							} else if (newEvent.categories.includes('family')) {
								setNewEvent({
									...newEvent,
									categories: newEvent.categories.filter(categorie => {
										return categorie !== 'family';
									}),
								});
							}
						}}
					/>
					<p>Family</p>
				</article>
				<article>
					<Campaign
						fontSize={'large'}
						onClick={() => {
							setActive('demo');
							if (!newEvent.categories.includes('demo')) {
								setNewEvent({
									...newEvent,
									categories: [...newEvent.categories, 'demo'],
								});
							} else if (newEvent.categories.includes('demo')) {
								setNewEvent({
									...newEvent,
									categories: newEvent.categories.filter(categorie => {
										return categorie !== 'demo';
									}),
								});
							}
						}}
					/>
					<p>Protest</p>
				</article>
				<article>
					<MusicNote
						fontSize={'large'}
						onClick={() => {
							setActive('concert');
							if (!newEvent.categories.includes('concert')) {
								setNewEvent({
									...newEvent,
									categories: [...newEvent.categories, 'concert'],
								});
							} else if (newEvent.categories.includes('concert')) {
								setNewEvent({
									...newEvent,
									categories: newEvent.categories.filter(categorie => {
										return categorie !== 'concert';
									}),
								});
							}
						}}
					/>
					<p>Concert</p>
				</article>
			</section>
		</Container>
	);
};

export default FormAddCategorie;
