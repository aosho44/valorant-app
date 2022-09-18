import { MapsCardDiv, MapsCardImage } from './MapsCard.styles';

import React from 'react';

function MapsCard(props) {
	const { data } = props;

	return (
		<MapsCardDiv>
			<MapsCardImage src={data.splash} alt={data.displayName} />
		</MapsCardDiv>
	);
}

export default MapsCard;
