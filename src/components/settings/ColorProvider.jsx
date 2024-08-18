"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

// Create the context
const ColorContext = createContext();

// Create a provider component
export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState();

  const changeColor = (newColor) => {
    setColor(newColor);
    document.documentElement.style.setProperty("--global-color", newColor);
  };

  return (
    <ColorContext.Provider value={{ color, changeColor }}>
      {children}
    </ColorContext.Provider>
  );
};

// Custom hook to use the ColorContext
export const useColor = () => useContext(ColorContext);
