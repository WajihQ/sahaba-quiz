import React, { createContext, useRef, useContext, useEffect, useState } from "react";
import PageContext from "./pageContext";

interface IAudioContext {
    playClickSound: () => void;
    backgroundAudioVolume: number;
    setBackgroundAudioVolume: (volume: number) => void;
    clickAudioVolume: number;
    setClickAudioVolume: (volume: number) => void;
}

const AudioContext = createContext<IAudioContext>({
    playClickSound: () => { },
    backgroundAudioVolume: 1,
    setBackgroundAudioVolume: () => { },
    clickAudioVolume: 1,
    setClickAudioVolume: () => { }
});

interface AudioProviderProps {
    children: React.ReactNode;
}

export const AudioProvider: React.FC<AudioProviderProps> = ({ children }) => {
    const clickAudioRef = useRef<HTMLAudioElement | null>(null);
    const backgroundAudioRef = useRef<HTMLAudioElement | null>(null);
    const { isMusicPlaying } = useContext(PageContext);
    const [backgroundAudioVolume, setBackgroundAudioVolume] = useState<number>(1);
    const [clickAudioVolume, setClickAudioVolume] = useState<number>(1);

    useEffect(() => {
        if (backgroundAudioRef.current) {
            if (isMusicPlaying) {
                backgroundAudioRef.current.play();
                backgroundAudioRef.current.volume = backgroundAudioVolume;
            } else {
                backgroundAudioRef.current.pause();
            }
        }
    }, [isMusicPlaying, backgroundAudioVolume]);

    const playClickSound = () => {
        if (clickAudioRef.current) {
            clickAudioRef.current.currentTime = 0;
            clickAudioRef.current.volume = clickAudioVolume;
            clickAudioRef.current.play();
        }
    };

    return (
        <AudioContext.Provider value={{ playClickSound, backgroundAudioVolume, setBackgroundAudioVolume, clickAudioVolume, setClickAudioVolume }}>
            {children}
            <audio ref={clickAudioRef}>
                <source src="/sounds/water-droplet.mp3" type="audio/mpeg" />
            </audio>
            <audio ref={backgroundAudioRef} loop>
                <source src="/sounds/nature-birds-ambiance.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </AudioContext.Provider>
    )
};

export const useAudio = () => useContext(AudioContext);
