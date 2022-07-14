import {useState, useEffect} from 'react';

import ParticipateEvent from '../components/ParticipateEvents/ParticipateEvents';
import SavedEvents from '../components/SavedEvents/SavedEvents';
import Tabbar from '../components/Tabbar/Tabbar';

export default function Bookmark({bookmark}) {
	const [tab, setTab] = useState(false);
	useEffect(() => {
		console.log(tab);
	},[tab]);
	return (
		<>
			<Tabbar tab={() => setTab(!tab)} />
			{tab && <SavedEvents />}
			{!tab && <ParticipateEvent />}
		</>
	);
}
