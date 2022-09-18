import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import weaponsApi from '../../apis/weaponsApi';

export const fetchAsyncWeapons = createAsyncThunk(
	'weapons/fetchAsyncWeapons',
	async () => {
		const response = await weaponsApi.get();
		return await response.data;
	}
);

const initialState = {
	weapons: {},
};

const weaponSlice = createSlice({
	name: 'weapons',
	initialState,
	reducers: {
		addWeapons: (state, { payload }) => {
			state.weapons = payload;
		},
	},
	extraReducers: (builders) => {
		builders.addCase(fetchAsyncWeapons.fulfilled, (state, payload) => {
			return { ...state, weapons: payload };
		});
	},
});

export const { addWeapons } = weaponSlice.actions;
export const getAllWeapons = (state) => state.weapons.weapons;
export default weaponSlice.reducer;
