import create from 'zustand';
import {persist} from 'zustand/middleware';

export const useStep = create(
	persist(
		set => ({
			step: 1,
			action: '',
			title: '',
			setTitle: title => set(() => ({title: title})),
			setAction: action => set(() => ({action: action})),
			nextStep: () => set(state => ({step: state.step + 1})),
			prevStep: () => set(state => ({step: state.step - 1})),
			resetStep: () => set(() => ({step: 1})),
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
				eventPicture:
					'https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg',
				title: '',
				private: false,
				address: '',
				city: '',
				zip: '',
				date: '',
				time: '',
				description: '',
				categories: ['all'],
			},
			setNewEvent: input => set(() => ({event: input})),
		}),
		{
			name: 'event',
			getStorage: () => sessionStorage,
		}
	)
);
