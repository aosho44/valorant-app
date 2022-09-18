import { Route, Routes } from 'react-router-dom';
import AllAgentsPage from './components/pages/Characters/AllAgentsPage';
import SingleAgentsView from './components/pages/Characters/SingleAgentsView';
import WeaponsPage from './components/pages/Weapons/WeaponsPage';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/Home/Home';
import MapsPage from './components/pages/Maps/MapsPage';
import PageNotFound from './components/pages/PageNotFound/PageNotFound';
import GlobalStyle from './components/styles/mainWebsiteStyle/MainCard.styles';

function App() {
	return (
		<div className="app">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/agents" element={<AllAgentsPage />} />
				<Route path="/agents/:id" element={<SingleAgentsView />} />
				<Route path="/maps/" element={<MapsPage />} />
				<Route path="/weapons/" element={<WeaponsPage />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
			<Footer />
			<GlobalStyle />
		</div>
	);
}

export default App;
