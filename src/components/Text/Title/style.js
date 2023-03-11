import styled from 'styled-components';

export const StyledTitle = styled.h1`
  ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.textBlack};
  font-size: 28px;
  margin: 1rem 0 0 0;
`;
