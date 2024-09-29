import { useContext } from "react";
import Button from "../../components/button/button";
import PageContext from "../../contexts/pageContext";
import SitePagesEnum from "../sitePagesEnum";
import ElementContainer from "../../components/elementContainer/elementContainer";

export default function About(): JSX.Element {
    const { setActivePage } = useContext(PageContext);

    const handleBackButtonClick = (): void => {
        console.log("Back");
        setActivePage(SitePagesEnum.Home);
    };

    return (
        <div className="sq_background">
            <h1 className="sq-h1">Sahaba Quiz</h1>
            <ElementContainer>
                <div id="sqAbout">
                    <h2 className="sq-h2">About</h2>
                    <p>This was developed for kids to educate them about our eminent predecessors known as the Sahaba.</p>
                    <Button id="aboutBackButton" variant="rectangular" onClick={ handleBackButtonClick } text="Go Back"></Button>
                </div>
            </ElementContainer>
        </div>
    );
};