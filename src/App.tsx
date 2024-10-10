import { useContext } from 'react';
import PageContext from "./contexts/pageContext";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import './App.css';
import SitePagesEnum from './pages/sitePagesEnum';
import BackgroundAudio from './components/backgroundSound/backgroundSound';
import MusicButton from "./components/musicButton/musicButton";

function App() {
	const { activePage, setActivePage } = useContext(PageContext);

	function navigateToPage(): JSX.Element {
		switch (activePage) {
			case SitePagesEnum.Home:
				return <Home />;
			case SitePagesEnum.About:
				return <About />;
			default:
				return <div></div>
		}
	}
	return (
		<>
			{<BackgroundAudio />}
			{navigateToPage()}
			{<MusicButton />}
		</>
	);
}

export default App;
