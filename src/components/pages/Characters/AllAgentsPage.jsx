import React, { useEffect } from 'react';
import Agents from './Agents';
import { useDispatch } from 'react-redux';
import { fetchAsyncAgents } from '../../features/agents/agentSlice';

function AllAgentsPage() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAsyncAgents());
	}, [dispatch]);
	return (
		<div>
			<Agents />
		</div>
	);
}

export default AllAgentsPage;
