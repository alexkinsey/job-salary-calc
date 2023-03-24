import { useState, useEffect } from 'react';
import logo from '../../assets/images/logo.svg';

import { NavBarBackground, NavContent, NavLogo, NavLinkContainer, NavLink, NavSpacer } from './style';
import { Burger } from './Burger';

export const NavBar = () => {
  const [open, setOpen] = useState(false);

  // close the burger menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 626) {
        setOpen(false);
      }
    };
    handleResize(); // call handleResize on mount
    window.addEventListener('resize', handleResize); // add event listener for resize

    return () => window.removeEventListener('resize', handleResize); // remove event listener on unmount
  }, []);

  return (
    <NavBarBackground open={open}>
      <NavContent onMouseLeave={() => setOpen(false)}>
        <NavLogo src={logo} alt="logo" />
        <NavSpacer />
        <NavLinkContainer open={open}>
          <NavLink to="/" open={open} onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/pay-calc" open={open} onClick={() => setOpen(false)}>
            Pay Calculator
          </NavLink>
          <NavLink to="/vacancy-search" open={open} onClick={() => setOpen(false)}>
            Vacancy Search
          </NavLink>
        </NavLinkContainer>
        <Burger open={open} setOpen={setOpen} />
      </NavContent>
    </NavBarBackground>
  );
};
