import logo from '../../assets/images/logo.svg';

import { NavBarBackground, NavContent, NavLogo, NavLinkContainer, NavLink, NavSpacer } from './style';

export const NavBar = () => {
  return (
    <NavBarBackground>
      <NavContent>
        <NavLogo src={logo} alt="logo" />
        <NavSpacer />
        <NavLinkContainer>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/pay-calc">Pay Calculator</NavLink>
          <NavLink to="/vacancy-search">Vacancy Search</NavLink>
        </NavLinkContainer>
      </NavContent>
    </NavBarBackground>
  );
};
