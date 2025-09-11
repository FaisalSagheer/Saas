"use client";

import { usePathname } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";

export const NavbarContext = createContext();
export const NavbarColorContext = createContext();

const NavContext = ({ children }) => {
  const [navOpen, setNavopen] = useState(false);
  const [navColor, setNavColor] = useState('white');
  const locate = usePathname()
  useEffect(()=>{
    if(locate=='/'||locate=='/contact'){
      setNavColor('white')
    }else{
      setNavColor('black')
    }
  },[locate])
  return (
    <div>
      <NavbarContext.Provider value={[navOpen, setNavopen]}>
        <NavbarColorContext.Provider value={[navColor, setNavColor]}>
          {children}
        </NavbarColorContext.Provider>
      </NavbarContext.Provider>
    </div>
  );
};

export default NavContext;
