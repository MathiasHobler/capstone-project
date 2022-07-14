import {useState} from 'react';

import ParticipateEvent from '../components/ParticipateEvents/ParticipateEvents';
import SavedEvents from '../components/SavedEvents/SavedEvents';
import Tabbar from '../components/Tabbar/Tabbar';

export default function Bookmark() {
	const [tab, setTab] = useState('');
	return (
		<>
			<Tabbar tab={input => setTab(input)} />
			{tab === 'saved' && <SavedEvents />}
			{tab === 'going' && <ParticipateEvent />}
		</>
	);
}
