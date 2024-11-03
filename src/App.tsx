import { useContext } from 'react';
import PageContext from "./contexts/pageContext";
import { AudioProvider } from './contexts/audioContext';
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Settings from './pages/settings/settings';
import './App.css';
import SitePagesEnum from './pages/sitePagesEnum';
import MusicButton from "./components/musicButton/musicButton";

function App() {
	const { activePage } = useContext(PageContext);

	function navigateToPage(): JSX.Element {
		switch (activePage) {
			case SitePagesEnum.Home:
				return <Home />;
			case SitePagesEnum.Settings:
				return <Settings />;
			case SitePagesEnum.About:
				return <About />;
			default:
				return <div></div>
		}
	}
	return (
		<>
			<AudioProvider>
				{navigateToPage()}
				{<MusicButton />}
			</AudioProvider>
		</>
	);
}

export default App;
