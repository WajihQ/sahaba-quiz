import React, { useEffect, useRef, useState } from 'react';

const BackgroundAudio: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (audioRef.current && isPlaying) {
            audioRef.current.play().catch(error => {
                console.error("Error playing audio:", error);
            });
        }
    }, [isPlaying]);

    const handleToggleAudio = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(error => {
                    console.error("Error playing audio:", error);
                });
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <>
            <audio ref={audioRef} loop>
                <source src="/sounds/nature-birds-ambiance.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            {/* Button to toggle audio */}
            <button onClick={handleToggleAudio}>
                {isPlaying ? 'Pause Audio' : 'Play Audio'}
            </button>
        </>
    );
};

export default BackgroundAudio;