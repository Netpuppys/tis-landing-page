"use client";
import React, { createContext, useState, useEffect } from "react";

// Create the context
export const UtmContext = createContext();

// Create the provider component
export const UtmProvider = ({ children }) => {
  const [utmParams, setUtmParams] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utmParamsString = params.toString();
    if (utmParamsString) {
      setUtmParams(`?${utmParamsString}`);
    }
  }, []);

  return (
    <UtmContext.Provider value={{ utmParams }}>{children}</UtmContext.Provider>
  );
};
