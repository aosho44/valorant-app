import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import mapsApi from '../../apis/mapsApi';

export const fetchAsyncMaps = createAsyncThunk(
	'maps/fetchAsyncMaps',
	async () => {
		const response = await mapsApi.get();
		return await response.data;
	}
);

const initialState = {
	maps: {},
};

const mapSlice = createSlice({
	name: 'maps',
	initialState,
	reducers: {
		addMaps: (state, { payload }) => {
			state.maps = payload;
		},
	},
	extraReducers: (builders) => {
		builders.addCase(fetchAsyncMaps.fulfilled, (state, payload) => {
			return { ...state, maps: payload };
		});
	},
});

export const { addMaps } = mapSlice.actions;
export const getAllMaps = (state) => state.maps.maps;
export default mapSlice.reducer;
