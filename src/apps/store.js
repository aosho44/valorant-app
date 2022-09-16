import { configureStore } from '@reduxjs/toolkit';
import agentsReducer from '../components/features/agents/agentSlice';

const store = configureStore({
	reducer: {
		agents: agentsReducer,
	},
});

export default store;
