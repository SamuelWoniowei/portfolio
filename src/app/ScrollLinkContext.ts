import { createContext, useContext } from "react";

const defaultContextValue = {
  activeLink: "about",
  setActive: () => {},
};

const ScrollLinkContext = createContext(defaultContextValue);

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
