import { useState, useEffect } from 'react';
import logo from '../../assets/images/logo.svg';

import { NavBarBackground, NavContent, NavLogo, NavLinkContainer, NavLink, NavSpacer } from './style';
import { Burger } from './Burger';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // close the burger menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 626) {
        setIsOpen(false);
      }
    };
    handleResize(); // call handleResize on mount
    window.addEventListener('resize', handleResize); // add event listener for resize

    return () => window.removeEventListener('resize', handleResize); // remove event listener on unmount
  }, []);

  return (
    <NavBarBackground isOpen={isOpen}>
      <NavContent onMouseLeave={() => setIsOpen(false)}>
        <NavLogo src={logo} alt="logo" />
        <NavSpacer />
        <NavLinkContainer isOpen={isOpen}>
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/pay-calc" onClick={() => setIsOpen(false)}>
            Pay Calculator
          </NavLink>
          <NavLink to="/vacancy-search" onClick={() => setIsOpen(false)}>
            Vacancy Search
          </NavLink>
        </NavLinkContainer>
        <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
      </NavContent>
    </NavBarBackground>
  );
};
