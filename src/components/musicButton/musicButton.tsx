import Button from "../button/button";
import { useContext } from "react";
import PageContext from "../../contexts/pageContext";
import { ReactComponent as MusicIcon } from '../../icons/music.svg';
import { ReactComponent as MusicIconSlash } from "../../icons/musicslash.svg";

const MusicButton: React.FC = () => {
    const { isMusicPlaying, toggleMusic } = useContext(PageContext);

    return (
        <Button id="musicButton" variant="circular" onClick={toggleMusic} icon={isMusicPlaying ? <MusicIcon /> : <MusicIconSlash />}></Button>
    )
}

export default MusicButton;