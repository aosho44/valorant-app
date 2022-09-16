import { HomeDiv, HomeImage } from './Home.styles';
import React from 'react';
import background from '../../../apps/images/valorant-background.jpg';

function HomeCard() {
	return (
		<HomeDiv>
			<HomeImage src={background} alt="" />
		</HomeDiv>
	);
}

export { HomeCard };
