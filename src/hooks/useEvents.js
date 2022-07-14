import create from 'zustand';
import {persist} from 'zustand/middleware';

export const useEvents = create(
	persist(
		set => ({
			events: {
				events: [],
				loading: null,
				error: null,
			},
			fetchData() {
				set(state => ({
					events: {
						events: state.events.events,
						loading: true,
						error: null,
					},
				}));
				fetch('/api/events')
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						} else {
							return response.json();
						}
					})
					.then(data => {
						set(() => ({
							events: {
								events: data.data,
								loading: false,
								error: null,
							},
						}));
					})
					.catch(error => {
						set(state => ({
							events: {
								events: state.events.events,
								loading: false,
								error: error.message,
							},
						}));
					});
			},
			setEvents: input => set(() => ({events: input})),
		}),
		{
			name: 'events',
			getStorage: () => sessionStorage,
		}
	)
);
