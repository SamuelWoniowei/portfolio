"use client"

import { createContext, useContext, useState } from 'react';

const ScrollLinkContext = createContext();

export const useScrollLinkContext = () => {
  const context = useContext(ScrollLinkContext);
  if (!context) {
    throw new Error('useScrollLinkContext must be used within a ScrollLinkProvider');
  }
  return context;
};

export const ScrollLinkProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState('about');

  const setActive = (link) => {
    setActiveLink(link);
  };

  return (
    <ScrollLinkContext.Provider value={{ activeLink, setActive }}>
      {children}
    </ScrollLinkContext.Provider>
  );
};
