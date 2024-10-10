import React, { createContext, useState } from "react";
import SitePagesEnum from "../pages/sitePagesEnum";

interface IPageContext { 
    activePage: string;
    setActivePage: (activePage: string) => void;
    isMusicPlaying: boolean;
    toggleMusic: () => void;
}

const PageContext = createContext<IPageContext>({
    activePage: SitePagesEnum.Home,
    setActivePage: () => { },
    isMusicPlaying: false,
    toggleMusic: () => { }
});

interface PageProviderProps {
    children: React.ReactNode;
}

export const PageProvider: React.FC<PageProviderProps> = ({ children }) => {
    const [activePage, setActivePage] = useState<string>(SitePagesEnum.Home);
    const [isMusicPlaying, setIsMusicPlaying] = useState<boolean>(false);

    const toggleMusic = () => {
        setIsMusicPlaying((prev) => !prev);
    };

    return (
        <PageContext.Provider value={{ activePage, setActivePage, isMusicPlaying, toggleMusic }}>
            {children}
        </PageContext.Provider>
    );
};

export default PageContext;
