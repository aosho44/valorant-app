import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMaps } from '../../features/maps/mapSlice';
import { ErrorCards } from '../../styles/errorStyle/ErrorCard';
import MapsCard from '../../styles/mapStyle/MapsCard';

function AllMaps() {
	const maps = useSelector(getAllMaps);

	let renderAllMaps = '';

	renderAllMaps =
		maps?.payload?.status === 200 ? (
			maps.payload.data.map((map, index) => {
				return <MapsCard key={index} data={map} />;
			})
		) : (
			<ErrorCards>
				<h3>{maps.Error}</h3>
			</ErrorCards>
		);

	return <div>{renderAllMaps}</div>;
}

export default AllMaps;
