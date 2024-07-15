"use client";

import { useState } from 'react';
import PropTypes from 'prop-types';
import ScrollLinkContext from './ScrollLinkContext';

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

ScrollLinkProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
