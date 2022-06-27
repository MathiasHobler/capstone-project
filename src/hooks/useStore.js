import create from 'zustand';

import dummyEvent from '../utils/data';

const useStore = create(() => ({
	db: [...dummyEvent],
}));

export default useStore;
