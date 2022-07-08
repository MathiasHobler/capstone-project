import create from 'zustand';

import dummyEvent from '../utils/data';

const useStore = create(set => ({
	db: [...dummyEvent],
	active: 'all',

	setActive: str => set({active: str}),
}));

export default useStore;
