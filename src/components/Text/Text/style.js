import styled from 'styled-components';

export const StyledText = styled.p`
  ${({ theme }) => theme.fonts.normal};
  font-size: 14px;
  /* if the black prop is passed and is true set font to black */
  color: ${({ theme, black }) => (black ? theme.colors.black : theme.colors.textGrey)};
  margin: 1rem 0;
`;
