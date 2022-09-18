import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncMaps } from '../../features/maps/mapSlice';
import { MapsContainer } from '../../styles/mapStyle/MapsCard.styles';
import Header from '../Header/Header';
import AllMaps from './AllMaps';

function MapsPage() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAsyncMaps());
	}, [dispatch]);

	return (
		<>
			<MapsContainer>
				<Header />
				<AllMaps />
			</MapsContainer>
		</>
	);
}

export default MapsPage;
