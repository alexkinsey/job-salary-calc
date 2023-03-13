import { NavBarBackground, NavContent, NavTitle, NavLink } from './style';

export const NavBar = () => {
  return (
    <NavBarBackground>
      <NavContent>
        <NavTitle>Your Career and Pay Calculator</NavTitle>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/pay-calc">Pay Calculator</NavLink>
        <NavLink to="/vacancy-search">Vacancy Search</NavLink>
      </NavContent>
    </NavBarBackground>
  );
};
