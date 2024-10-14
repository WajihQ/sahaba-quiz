import { useContext } from 'react';
import PageContext from "./contexts/pageContext";
import { AudioProvider } from './contexts/audioContext';
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import './App.css';
import SitePagesEnum from './pages/sitePagesEnum';
import BackgroundAudio from './components/backgroundSound/backgroundSound';
import MusicButton from "./components/musicButton/musicButton";
import ButtonClickAudio from './components/buttonClickSound/buttonClickSound';

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
			<AudioProvider>
				{<ButtonClickAudio />}
				{<BackgroundAudio />}
				{navigateToPage()}
				{<MusicButton />}
			</AudioProvider>
		</>
	);
}

export default App;
