import React, { createContext, useState } from "react";
import SitePagesEnum from "../pages/sitePagesEnum";

interface IPageContext { 
    activePage: string;
    setActivePage: (activePage: string) => void;
}

const PageContext = createContext<IPageContext>({
    activePage: SitePagesEnum.Home,
    setActivePage: () => { }
});

interface PageProviderProps {
    children: React.ReactNode;
}

export const PageProvider: React.FC<PageProviderProps> = ({ children }) => {
    const [activePage, setActivePage] = useState<string>(SitePagesEnum.Home);

    return (
        <PageContext.Provider value={{ activePage, setActivePage }}>
            {children}
        </PageContext.Provider>
    );
};

export default PageContext;
