import {
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
							setNewEvent({
								...newEvent,
								categories: [...newEvent.categories, 'day'],
							});
						}}
					/>
					<p>Day</p>
				</article>
				<article>
					<Nightlife
						fontSize={'large'}
						onClick={() => {
							setActive('night');
							setNewEvent({
								...newEvent,
								categories: [...newEvent.categories, 'night'],
							});
						}}
					/>
					<p>Night</p>
				</article>
				<article>
					<Pets
						fontSize={'large'}
						onClick={() => {
							setActive('pets');
							setNewEvent({
								...newEvent,
								categories: [...newEvent.categories, 'pets'],
							});
						}}
					/>
					<p>Pets</p>
				</article>
				<article>
					<OutdoorGrill
						fontSize={'large'}
						onClick={() => {
							setActive('bbq');
							setNewEvent({
								...newEvent,
								categories: [...newEvent.categories, 'bbq'],
							});
						}}
					/>
					<p>BBQ</p>
				</article>
				<article>
					<Restaurant
						fontSize={'large'}
						onClick={() => {
							setActive('dinner');
							setNewEvent({
								...newEvent,
								categories: [...newEvent.categories, 'dinner'],
							});
						}}
					/>
					<p>Dinner</p>
				</article>
				<article>
					<SportsScore
						fontSize={'large'}
						onClick={() => {
							setActive('sport');
							setNewEvent({
								...newEvent,
								categories: [...newEvent.categories, 'sport'],
							});
						}}
					/>
					<p>Sport</p>
				</article>
				<article>
					<FamilyRestroom
						fontSize={'large'}
						onClick={() => {
							setActive('family');
							setNewEvent({
								...newEvent,
								categories: [...newEvent.categories, 'family'],
							});
						}}
					/>
					<p>Family</p>
				</article>
				<article>
					<Woman
						fontSize={'large'}
						onClick={() => {
							setActive('woman');
							setNewEvent({
								...newEvent,
								categories: [...newEvent.categories, 'women'],
							});
						}}
					/>
					<p>Woman</p>
				</article>
				<article>
					<Man
						fontSize={'large'}
						onClick={() => {
							setActive('man');
							setNewEvent({
								...newEvent,
								categories: [...newEvent.categories, 'man'],
							});
						}}
					/>
					<p>Man</p>
				</article>
			</section>
		</Container>
	);
};

export default FormAddCategorie;
