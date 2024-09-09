import React,  { ReactNode } from "react";
import "./elementContainer.css";

interface ElementContainerProps {
    children: React.ReactNode;
}

const ElementContainer: React.FC<ElementContainerProps> = ({ children }) => {
    return (
        <div data-testid="container" className="element_container">
            { children }
        </div>
    );
};

export default ElementContainer;