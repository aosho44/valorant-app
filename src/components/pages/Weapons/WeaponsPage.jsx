import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncMaps } from '../../features/maps/mapSlice';
import { WeaponsContainer } from '../../styles/weapons/WeaponsCard.styles';
import Header from '../Header/Header';
import AllWeapons from './AllWeapons';

function Weapons() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAsyncMaps());
	}, [dispatch]);

	return (
		<>
			<WeaponsContainer>
				<Header />
				<AllWeapons />
			</WeaponsContainer>
		</>
	);
}

export default Weapons;
