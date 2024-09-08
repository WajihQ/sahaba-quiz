import React, { useContext } from 'react';
import Button from "./components/button/button";
import { ReactComponent as MusicIcon } from './icons/music.svg';
import PageContext from "./contexts/pageContext";
import './App.css';
import SitePagesEnum from './pages/sitePagesEnum';

function App() {
	const { activePage, setActivePage } = useContext(PageContext);

	function navigateToPage(): JSX.Element {
		switch (activePage) {
		case SitePagesEnum.Home:
			return <div></div>;
		default:
			return <div></div>
		}
	}
	return (
		<>
			{ navigateToPage() }
		</>
		// <div className="App">
		//   <Button variant="rectangular" onClick={() => console.log("hi")} text={"Play!"}></Button>
		//   <Button variant="circular" onClick={() => {}} icon={<MusicIcon />}></Button>
		// </div>
	);
}

export default App;
