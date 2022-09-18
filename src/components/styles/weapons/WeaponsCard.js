import React from 'react';
import { WeaponsCardDiv, WeaponsCardImage } from './WeaponsCard.styles';

function WeaponsCard(props) {
	const { data } = props;

	return (
		<WeaponsCardDiv>
			<WeaponsCardImage src={data.displayIcon} alt={data.displayName} />
		</WeaponsCardDiv>
	);
}

export default WeaponsCard;
