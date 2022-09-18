import React, { useEffect } from 'react';
import Agents from './Agents';
import { useDispatch } from 'react-redux';
import { fetchAsyncAgents } from '../../features/agents/agentSlice';
import Header from '../Header/Header';

function AllAgentsPage() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAsyncAgents());
	}, [dispatch]);
	return (
		<>
			<Header />
			<Agents />
		</>
	);
}

export default AllAgentsPage;
