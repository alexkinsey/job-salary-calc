import logo from '../../assets/images/logo.svg';

import { NavBarBackground, NavContent, NavLogo, NavLink, NavSpacer } from './style';

export const NavBar = () => {
  return (
    <NavBarBackground>
      <NavContent>
        <NavLogo src={logo} alt="logo" />
        <NavSpacer />
        <NavLink to="/">Home</NavLink>
        <NavLink to="/pay-calc">Pay Calculator</NavLink>
        <NavLink to="/vacancy-search">Vacancy Search</NavLink>
      </NavContent>
    </NavBarBackground>
  );
};
