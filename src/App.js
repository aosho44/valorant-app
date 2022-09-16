import { Route, Routes } from 'react-router-dom';
import AllAgentsPage from './components/pages/Characters/AllAgentsPage';
import SingleAgentsView from './components/pages/Characters/SingleAgentsView';
import Footer from './components/pages/Footer/Footer';
import Header from './components/pages/Header/Header';
import Home from './components/pages/Home/Home';
import PageNotFound from './components/pages/PageNotFound/PageNotFound';

function App() {
	return (
		<div className="app">
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/agents" element={<AllAgentsPage />} />
				<Route path="/agents/:id" element={<SingleAgentsView />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
