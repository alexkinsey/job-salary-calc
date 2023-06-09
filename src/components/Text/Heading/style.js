import styled from 'styled-components';

export const StyledHeading = styled.h2`
  ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.text};
  font-size: 22px;
  margin: 1rem 0 0 0;
`;
