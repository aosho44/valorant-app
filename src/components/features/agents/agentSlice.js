import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import agentApi from '../../apis/agentsApi';

export const fetchAsyncAgents = createAsyncThunk(
	'agents/fetchAsyncAgents',
	async () => {
		const response = await agentApi.get(`?isPlayableCharacter=${true}`);
		return await response.data;
	}
);

const initialState = {
	agents: {},
};

const agentSlice = createSlice({
	name: 'agents',
	initialState,
	reducers: {
		addAgents: (state, { payload }) => {
			state.agents = payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAsyncAgents.pending, () => {
				console.log('Pending');
			})
			.addCase(fetchAsyncAgents.fulfilled, (state, payload) => {
				console.log('Fetched Successfully');
				console.log(payload);
				return { ...state, agents: payload };
			})
			.addCase(fetchAsyncAgents.rejected, () => {
				console.log('Failed');
			});
	},
});

export const { addAgents } = agentSlice.actions;
export const getSingleAgents = (state) => state.agents.agents;
export default agentSlice.reducer;
