import { createContext, useContext, ReactNode } from "react";

interface ScrollLinkContextType {
  activeLink: string;
  setActive: (link: string) => void; 
}

const defaultContextValue: ScrollLinkContextType = {
  activeLink: "about",
  setActive: () => {},
};

const ScrollLinkContext = createContext<ScrollLinkContextType>(defaultContextValue);

export const useScrollLinkContext = () => {
  const context = useContext(ScrollLinkContext);
  if (!context) {
    throw new Error(
      "useScrollLinkContext must be used within a ScrollLinkProvider"
    );
  }
  return context;
};

export default ScrollLinkContext;
