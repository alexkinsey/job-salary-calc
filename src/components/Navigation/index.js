import { useState, useEffect } from 'react';
import logo from '../../assets/images/logo.svg';

// STYLES
import { NavBarBackground, NavContent, NavLogo, NavLinkContainer, NavLink, NavSpacer } from './style';

// COMPONENTS
import { Burger } from './Burger';

// ROUTES
import { HOME_ROUTE, PAY_CALCULATOR_ROUTE, VACANCY_SEARCH_ROUTE } from '../../constants/routes';

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
          <NavLink to={HOME_ROUTE} open={open} onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to={PAY_CALCULATOR_ROUTE} open={open} onClick={() => setOpen(false)}>
            Pay Calculator
          </NavLink>
          <NavLink to={VACANCY_SEARCH_ROUTE} open={open} onClick={() => setOpen(false)}>
            Vacancy Search
          </NavLink>
        </NavLinkContainer>
        <Burger open={open} setOpen={setOpen} />
      </NavContent>
    </NavBarBackground>
  );
};
