import styled from 'styled-components';

export const NavBarBackground = styled.nav`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 60px;
  padding: 0 20px;
  min-width: ${({ theme }) => theme.sizes.xs};
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

export const NavLink = styled.a`
  ${({ theme }) => theme.fonts.normal};
  color: ${({ theme }) => theme.colors.textWhite};

  :hover {
    color: ${({ theme }) => theme.colors.textWhite};
  }
`;
