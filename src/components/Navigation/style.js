import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const NavBarBackground = styled.nav`
  position: fixed;
  z-index: 100;
  display: flex;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.secondary};

  height: ${({ isOpen }) => (isOpen ? '100px' : '60px')};
  width: 100%;
  padding: 0 20px;
  min-width: ${({ theme }) => theme.sizes.xs};

  transition: height 0.5s ease-in-out;
`;

export const NavContent = styled.div`
  position: relative;
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

export const NavLogo = styled.img`
  height: 40px;
  @media (max-width: 626px) {
    position: fixed;
    top: 10px;
    left: 20px;
    z-index: 1001;
  }
`;

export const NavSpacer = styled.div`
  flex-grow: 1;
  @media (max-width: 626px) {
    display: none;
  }
`;

export const NavLinkContainer = styled.div`
  display: flex;
  gap: 2em;
  /* the container should be 50% of the expanded area with the links in the centre */
  @media (max-width: 626px) {
    height: 50%;
    width: 350px;
    position: absolute;
    bottom: 0;
    align-items: center;
    justify-content: space-between;
    gap: 0;
    /* fade contents in and out */
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    transition: all 0.3s ease-in-out;
  }
`;

// this specifically styles a react router link to prevent the page reloading when the link is clicked
export const NavLink = styled(Link)`
  ${({ theme }) => theme.fonts.normal};
  color: ${({ theme }) => theme.colors.textWhite};
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.colors.textWhite};
  }
`;
