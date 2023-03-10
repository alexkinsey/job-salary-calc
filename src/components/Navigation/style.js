import styled from 'styled-components';
import { font } from '../../styles/Theme';

export const NavBarBackground = styled.nav`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.tertiary};
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
  @media (max-width: 785px) {
    justify-content: space-around;
  }
`;

export const NavTitle = styled.h2`
  ${font.heading};
  color: ${({ theme }) => theme.colors.textWhite};
  flex-grow: 1;
  @media (max-width: 785px) {
    display: none;
  }
`;


export const NavLink = styled.a`
  ${font.normal};
  color: ${({ theme }) => theme.colors.textWhite};

  :hover {
    color: ${({ theme }) => theme.colors.textWhite};
  }
`;
