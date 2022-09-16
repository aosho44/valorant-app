import React from 'react';
import { useSelector } from 'react-redux';
import { getSingleAgents } from '../../features/agents/agentSlice';
import { ErrorCards } from '../../styles/errorStyle/ErrorCard';
import { AgentsLoneCard } from '../../styles/agentStyle/AgentLoneCard';

function SingleAgents() {
	const agents = useSelector(getSingleAgents);
	console.log(agents?.payload?.status);

	let renderAgents = '';

	renderAgents =
		agents?.payload?.status === 200 ? (
			[agents.payload.data].map((agent, index) => {
				return <AgentsLoneCard key={index} data={agent} />;
			})
		) : (
			<ErrorCards />
		);

	return (
		<>
			<div>{renderAgents}</div>
		</>
	);
}

export default SingleAgents;
