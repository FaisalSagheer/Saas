"use client";

import React, { createContext, useState } from "react";

export const NavbarContext = createContext();
const NavContext = ({ children }) => {

  const [navOpen, setNavopen] = useState(false);
  return (
    <div>
      <NavbarContext.Provider value={[navOpen, setNavopen]}>
        {children}
      </NavbarContext.Provider>
    </div>
  );

};

export default NavContext;
