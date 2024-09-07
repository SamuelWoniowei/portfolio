"use client";

import { useState } from 'react';
import PropTypes from 'prop-types';
import ScrollLinkContext from './ScrollLinkContext';

export const ScrollLinkProvider = ({ children }:any ) => {
  const [activeLink, setActiveLink] = useState<string>('about');

  const setActive = (link: string) => {
    setActiveLink(link);
  };

  return (
    <ScrollLinkContext.Provider value={{ activeLink, setActive }}>
      {children}
    </ScrollLinkContext.Provider>
  );
};