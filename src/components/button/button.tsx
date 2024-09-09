import React,  { ReactNode } from "react";
import "./button.css";

interface ButtonProps {
    id?: string;
    variant: "circular" | "rectangular";
    icon?: ReactNode;
    text?: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ id, variant, icon, text, onClick }) => {
    const buttonClass = variant === "circular" ? "circular_button": "rectangular_button";
    return (
        <button id={id} data-testid="button" className={buttonClass} onClick={onClick}>
            {icon && <span className="icon">{icon}</span>}
            {text && <span className="text">{text}</span>}
        </button>
    );
};

export default Button;