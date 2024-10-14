import React, { useRef, useImperativeHandle, forwardRef } from "react";

const ButtonClickAudio = forwardRef((_, ref) => {
    const clickAudioRef = useRef<HTMLAudioElement | null>(null);

    useImperativeHandle(ref, () => ({
        playClickSound: () => {
            if (clickAudioRef.current) {
                clickAudioRef.current.currentTime = 0;
                clickAudioRef.current.play();
            }
        }
    }));

    return (
        <>
            <audio ref={clickAudioRef}>
                <source src="/sounds/water-droplet.mp3" type="audio/mpeg" />
            </audio>
        </>
    );
});

export default ButtonClickAudio;
