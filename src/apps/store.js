import { configureStore } from '@reduxjs/toolkit';
import agentsReducer from '../components/features/agents/agentSlice';
import mapSlice from '../components/features/maps/mapSlice';

const store = configureStore({
	reducer: {
		agents: agentsReducer,
		maps: mapSlice,
	},
});

export default store;
