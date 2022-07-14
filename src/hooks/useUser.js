import create from 'zustand';
import {persist} from 'zustand/middleware';

export const useUser = create(
	persist(
		set => ({
			user: {
				id: '',
				username: '',
				email: '',
				password: '',
				profilePicture: '',
				friends: [],
				participates: [],
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
