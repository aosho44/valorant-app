import { configureStore } from '@reduxjs/toolkit';
import agentsReducer from '../components/features/agents/agentSlice';
import mapSlice from '../components/features/maps/mapSlice';
import weaponSlice from '../components/features/weapons/weaponSlice';

const store = configureStore({
	reducer: {
		agents: agentsReducer,
		maps: mapSlice,
		weapons: weaponSlice,
	},
});

export default store;
