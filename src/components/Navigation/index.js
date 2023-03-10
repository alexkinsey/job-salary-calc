import { NavBarBackground, NavContent, NavTitle, NavLink } from './style';

export const NavBar = () => {
  return (
    <NavBarBackground>
      <NavContent>
        <NavTitle>Your Career and Salary Calculator</NavTitle>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/salary-calc">Salary Calculator</NavLink>
        <NavLink href="/vacancy-search">Vacancy Search</NavLink>
      </NavContent>
    </NavBarBackground>
  );
};
