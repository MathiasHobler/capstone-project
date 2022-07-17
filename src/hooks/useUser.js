import create from 'zustand';
import {persist} from 'zustand/middleware';

export const useUser = create(
	persist(
		set => ({
			user: {
				id: '',
				username: 'localUser',
				email: '',
				password: '',
				profilePicture: '',
				friends: [],
				participates: [],
				bookmarked: [],
				about: '',
				city: '',
				from: '',
			},
			setUser: input => set(() => ({user: input})),
		}),
		{
			name: 'user',
		}
	)
);
