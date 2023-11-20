import { createContext, Dispatch, SetStateAction, useState } from "react";

const initialProduct: boolean = false;

export type NavbarType = {
    setNavbarStatus: Dispatch<SetStateAction<boolean | null>>;
    navbarActiveStatus: boolean | null;
};

export const initialNavbarContext = createContext<NavbarType | null>(null);

export const NavbarProvider = ({ children }: { children: JSX.Element }) => {
    const [navbarActive, setNavbar] = useState<boolean | null>(initialProduct);

    return (
        <initialNavbarContext.Provider value={{ navbarActiveStatus: navbarActive, setNavbarStatus: setNavbar }}>
            {children}
        </initialNavbarContext.Provider>
    );
};