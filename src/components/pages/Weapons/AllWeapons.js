import React from 'react';
import { useSelector } from 'react-redux';
import { getAllWeapons } from '../../features/weapons/weaponSlice';
import WeaponsCard from '../../styles/weapons/WeaponsCard';
import { ErrorCards } from '../../styles/errorStyle/ErrorCard';

function AllWeapons() {
	const weapons = useSelector(getAllWeapons);
	console.log(weapons);

	let renderAllWeapons = '';
	console.log(weapons);

	renderAllWeapons =
		weapons?.payload?.status === 200 ? (
			weapons.payload.data.map((weapon, index) => {
				return <WeaponsCard key={index} data={weapon} />;
			})
		) : (
			<ErrorCards>
				<h3>{weapons.Error}Weapons</h3>
			</ErrorCards>
		);

	return <div>{renderAllWeapons}</div>;
}

export default AllWeapons;
