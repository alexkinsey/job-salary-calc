import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const NavBarBackground = styled.nav`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 60px;
  padding: 0 20px;
  min-width: ${({ theme }) => theme.sizes.xs};
  width: 100%;
`;

export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2em;
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.lg};

  /* before a screen size of 785 the links should display as flex with space around each link*/
  @media (max-width: 785px) {
    justify-content: space-around;
  }
  /* add padding to the nav title and links to mach the padding of the page content */
  @media (min-width: ${({ theme }) => theme.sizes.lg}) {
    padding: 0 20px;
  }
`;

export const NavTitle = styled.h2`
  ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.textWhite};
  flex-grow: 1;

  /* hide the title when the screen is 777 or smaller */
  @media (max-width: 777px) {
    display: none;
  }
`;

// this specifically styles a react router link to prevent the page reloading when the link is clicked
export const NavLink = styled(Link)`
  ${({ theme }) => theme.fonts.normal};
  color: ${({ theme }) => theme.colors.textWhite};

  :hover {
    color: ${({ theme }) => theme.colors.textWhite};
  }
`;
