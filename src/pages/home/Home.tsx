import React, { useContext } from "react";
import SitePagesEnum from "../sitePagesEnum";
import Button from "../../components/button/button";
import ElementContainer from "../../components/elementContainer/elementContainer";
import PageContext from "../../contexts/pageContext";
import { ReactComponent as MusicIcon } from '../../icons/music.svg';
import "./Home.css";

export default function Home(): JSX.Element {
    const { setActivePage } = useContext(PageContext);
    return (
        <div id="sqHome">
            <h1 className="sq-h1">Sahaba Quiz</h1>
            <ElementContainer>
                <Button variant="rectangular" text="Play" onClick={() => { }}></Button>
                <Button variant="rectangular" text="Settings" onClick={() => { }}></Button>
                <Button variant="rectangular" text="About" onClick={() => { }}></Button>
            </ElementContainer>
            <Button id="musicButton" variant="circular" onClick={() => { }} icon={<MusicIcon />}></Button>
        </div>
    );
};