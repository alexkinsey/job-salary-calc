import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textWhite};
  border: ${({ theme }) => `2px solid ${theme.colors.primary}`};
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;

  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  ${({ secondary, theme }) =>
    secondary &&
    `
      box-sizing: content-box;
      background-color: transparent;
      border: 2px solid ${theme.colors.primary};
      color: ${theme.colors.primary};
      &:hover {
        color: ${theme.colors.textWhite};
      }
    `}
`;
