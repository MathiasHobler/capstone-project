import create from 'zustand';
import {persist} from 'zustand/middleware';

export const useEvents = create(
	persist(
		set => ({
			events: [],
			setEvents: input => set(() => ({events: input})),
		}),
		{
			name: 'events',
			getStorage: () => sessionStorage,
		}
	)
);
