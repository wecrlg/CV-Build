import { createContext, ReactNode, useContext, useState } from "react";
// import { content } from "../data/data";

// const { nav } = content;

// TYPES FOR CREATE CONTEXT
type NavContext = {
  displayNav: () => boolean;
  toggleNavbar: () => void;
  
};

type PortfolioProviderProps = {
  children: ReactNode;
};

const CONTEXT = createContext({} as NavContext);

export function usePortfolioContext() {
  return useContext(CONTEXT);
}

const portfolio = {
  navDisplay: false,
};

export function PortfolioContextProvider({ children }: PortfolioProviderProps) {
  const [showNav, setShowNav] = useState<boolean>(portfolio.navDisplay);

  function toggleNavbar() {
    setShowNav((prev) => !prev);
  }

  function displayNav() {
    return showNav;
  }

  

  return (
    <CONTEXT.Provider value={{ toggleNavbar, displayNav }}>
      {children}
    </CONTEXT.Provider>
  );
}
