import styled from 'styled-components';

export const StyledText = styled.p`
  ${({ theme }) => theme.fonts.normal};
  color: ${({ theme }) => theme.colors.textGrey};
  margin: 1rem 0;
`;
