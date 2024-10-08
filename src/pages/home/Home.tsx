import { useContext } from "react";
import SitePagesEnum from "../sitePagesEnum";
import Button from "../../components/button/button";
import ElementContainer from "../../components/elementContainer/elementContainer";
import PageContext from "../../contexts/pageContext";
import "./Home.css";
import MusicButton from "../../components/musicButton/musicButton";

export default function Home(): JSX.Element {
    const { setActivePage } = useContext(PageContext);

    function navigateToPage(page: SitePagesEnum) {
        console.log(page);
        setActivePage(page);
    };

    return (
        <div id="sqHome" className="sq_background">
            <h1 className="sq-h1">Sahaba Quiz</h1>
            <ElementContainer>
                <Button variant="rectangular" text="Play" onClick={() => { }}></Button>
                <Button variant="rectangular" text="Settings" onClick={() => { }}></Button>
                <Button variant="rectangular" text="About" onClick={() => navigateToPage(SitePagesEnum.About)}></Button>
            </ElementContainer>
            {<MusicButton />}
            {/* <Button id="musicButton" variant="circular" onClick={() => { }} icon={<MusicIcon />}></Button> */}
        </div>
    );
};