import styled from 'styled-components';

export const StyledSubheading = styled.h3`
  ${({ theme }) => theme.fonts.subheading};
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  margin: 1rem 0 0 0;
`;
