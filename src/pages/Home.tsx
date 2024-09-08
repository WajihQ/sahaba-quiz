import React, { useContext } from "react";
import SitePagesEnum from "./sitePagesEnum";
import Button from "../components/button/button";
import PageContext from "../contexts/pageContext";

export default function Home(): JSX.Element {
    const { setActivePage } = useContext(PageContext);
    return (
        <div id="sqHome">
            <Button variant="rectangular" text="Play" onClick={() => { setActivePage(SitePagesEnum.Home) }}></Button>
        </div>
    );
};