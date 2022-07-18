import create from 'zustand';

export const useEvents = create(set => ({
	events: {
		events: [],
		loading: null,
		error: null,
	},
	getData() {
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

	createEvent(data) {
		set(state => ({
			events: {
				events: state.events.events,
				loading: true,
				error: null,
			},
		}));
		fetch('/api/events', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
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
	deleteEvent(id) {
		set(state => ({
			events: {
				events: state.events.events,
				loading: true,
				error: null,
			},
		}));
		fetch(`/api/events/${id}`, {
			method: 'DELETE',
		})
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
	updateEvent(object, id) {
		fetch(`/api/events/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(object),
		})
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
}));
