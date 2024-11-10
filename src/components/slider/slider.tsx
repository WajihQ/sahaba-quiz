import React from "react";
import "./slider.css";

interface SliderProps {
    id: string;
    title: string;
    value: number;
    onChange: (volume: number) => void;
}

const Slider: React.FC<SliderProps> = ({ id, title, value, onChange }) => {
    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(parseFloat(e.target.value));
    };

    return (
        <div className="slider-div">
            {title}
            <input id={id} type="range" min="0" max="1" step="0.25" value={value} onChange={handleVolumeChange} />
        </div>
    )
};

export default Slider;
