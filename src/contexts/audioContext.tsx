import React, { createContext, useRef, useContext } from "react";

interface IAudioContext {
    playClickSound: () => void;
}

const AudioContext = createContext<IAudioContext>({
    playClickSound: () => { }
});

interface AudioProviderProps {
    children: React.ReactNode;
}

export const AudioProvider: React.FC<AudioProviderProps> = ({ children }) => {
    const clickAudioRef = useRef<HTMLAudioElement | null>(null);

    const playClickSound = () => {
        if (clickAudioRef.current) {
            clickAudioRef.current.currentTime = 0;
            clickAudioRef.current.play();
        }
    };

    return (
        <AudioContext.Provider value={{ playClickSound }}>
            {children}
            <audio ref={clickAudioRef}>
                <source src="/sounds/water-droplet.mp3" type="audio/mpeg" />
            </audio>
        </AudioContext.Provider>
    )
}

export const useAudio = () => useContext(AudioContext);
