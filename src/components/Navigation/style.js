import styled from 'styled-components';

import { Link } from 'react-router-dom';

const smallNavBreakpoint = '626px';

export const NavBarBackground = styled.nav`
  position: fixed;
  z-index: 100;
  display: flex;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.secondary};

  height: ${({ open }) => (open ? '120px' : '60px')};
  width: 100%;
  padding: 0 20px;
  min-width: ${({ theme }) => theme.sizes.xs};

  box-shadow: ${({ open }) => (open ? '0 5px 25px 15px rgba(0, 15, 33, 0.5)' : 'none')};

  transition: all 0.5s ease-in-out;
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
  /* before a screen size of 626 the nav content should display as flex with space between each item aligned to the top of the screen */
  @media (max-width: ${smallNavBreakpoint}) {
    justify-content: space-between;
    align-items: flex-start;
    margin: 0.75rem 0;
  }
`;

export const NavLogo = styled.img`
  height: 40px;
`;

export const NavSpacer = styled.div`
  flex-grow: 1;
  @media (max-width: ${smallNavBreakpoint}) {
    display: none;
  }
`;

export const NavLinkContainer = styled.div`
  display: flex;
  gap: 2em;
  /* the container should be 50% of the expanded area with the links in the centre */
  @media (max-width: ${smallNavBreakpoint}) {
    position: absolute;
    bottom: 0;
    height: 50%;
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    align-items: center;
    justify-content: space-around;
    gap: 0px;
    /* fade contents in and out */
    opacity: ${({ open }) => (open ? 1 : 0)};
    transition: all 0.3s ease-in-out;

    :first-child {
      border-right: 1px solid rgba(255, 255, 255, 0.2);
    }
  }
`;

// this specifically styles a react router link to prevent the page reloading when the link is clicked
export const NavLink = styled(Link)`
  ${({ theme }) => theme.fonts.normal};
  color: ${({ theme }) => theme.colors.textWhite};
  cursor: pointer;
  /* on mobile disable links when burger menu closed */
  @media (max-width: ${smallNavBreakpoint}) {
    pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
  }

  :hover {
    color: ${({ theme }) => theme.colors.textWhite};
  }
`;
