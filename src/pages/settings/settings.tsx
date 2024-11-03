import React, { useContext } from "react";
import Slider from "../../components/slider/slider";
import PageContext from "../../contexts/pageContext";
import ElementContainer from "../../components/elementContainer/elementContainer";
import { useAudio } from "../../contexts/audioContext";
import SitePagesEnum from "../sitePagesEnum";
import Button from "../../components/button/button";

export default function Settings(): JSX.Element{
    const { setActivePage } = useContext(PageContext);

    const handleBackButtonClick = (): void => {
        console.log("Back");
        setActivePage(SitePagesEnum.Home);
    };

    const {
        backgroundAudioVolume,
        setBackgroundAudioVolume,
        clickAudioVolume,
        setClickAudioVolume
    } = useAudio();
    
    return (
        <div className="sq_background">
            <ElementContainer>
                <div id="sqSettings">
                    <h2 className="sq-h2">Settings</h2>
                    <Slider id="sqBgAudioSlider" title="Background Sound" value={ backgroundAudioVolume } onChange={ setBackgroundAudioVolume }></Slider>
                    <Button id="aboutBackButton" variant="rectangular" onClick={ handleBackButtonClick } text="Go Back"></Button>
                </div>
            </ElementContainer>
        </div>
    )
};
