import styled from 'styled-components';

export const StyledText = styled.p`
  /* if the medium prop is passed and is true set font to medium otherwise show normal font */
  ${({ theme, medium }) => (medium ? theme.fonts.medium : theme.fonts.normal)}
  font-size: 14px;
  /* if the black prop is passed and is true set font to black */
  color: ${({ theme, black }) => (black ? theme.colors.textBlack : theme.colors.textGrey)};
  margin: 1rem 0;
`;
