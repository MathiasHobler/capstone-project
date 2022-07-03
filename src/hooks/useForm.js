import create from 'zustand';
import {persist} from 'zustand/middleware';

export const useStep = create(
	persist(
		set => ({
			step: 1,
			nextStep: () => set(state => ({step: state.step + 1})),
			prevStep: () => set(state => ({step: state.step - 1})),
			resetStep: () => set(state => ({step: 1})),
		}),
		{
			name: 'step',
			getStorage: () => sessionStorage,
		}
	)
);

export const useCreate = create(
	persist(
		set => ({
			event: {
				pictures: {
					eventPicture:
						'https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg',
				},
				title: '',
				private: false,
				street: '',
				city: '',
				zip: Number,
				date: '',
				time: '',
				description: '',
			},
			setNewEvent: input => set(() => ({event: input})),
		}),
		{
			name: 'event',
			getStorage: () => sessionStorage,
		}
	)
);
