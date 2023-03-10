import styled from 'styled-components';

export const StyledHeading = styled.h1`
  ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.text};
  font-size: 22px;
  margin: 1rem 0 0 0;
`;

export const HR = styled.hr`
  border: solid 2px ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  width: 50px;
  margin: 1rem 0;
`;
