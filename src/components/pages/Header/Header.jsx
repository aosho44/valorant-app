import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<div>
			<Link to={`/`}>
				<button>Home</button>
			</Link>
			<Link to={`/agents`}>
				<button>Agents</button>
			</Link>
		</div>
	);
}

export default Header;
