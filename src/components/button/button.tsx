import React,  { ReactNode } from "react";
import "./button.css";
import { useAudio } from "../../contexts/audioContext";

interface ButtonProps {
    id?: string;
    variant: "circular" | "rectangular";
    icon?: ReactNode;
    text?: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ id, variant, icon, text, onClick }) => {
    const buttonClass = variant === "circular" ? "circular_button": "rectangular_button";
    const { playClickSound } = useAudio()

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        playClickSound();

        if (onClick) {
            onClick(event);
        }
    };

    return (
        <>
            <button id={id} data-testid="button" className={buttonClass} onClick={handleClick}>
                {icon && <span className="icon">{icon}</span>}
                {text && <span className="text">{text}</span>}
            </button>
        </>
    );
};

export default Button;