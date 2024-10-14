import React, { useEffect, useRef, useContext} from 'react';
import PageContext from '../../contexts/pageContext';

const BackgroundAudio: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const { isMusicPlaying } = useContext(PageContext);

    useEffect(() => {
        if (audioRef.current) {
            if (isMusicPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isMusicPlaying]);

    return (
        <>
            <audio ref={audioRef} loop>
                <source src="/sounds/nature-birds-ambiance.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </>
    );
};

export default BackgroundAudio;