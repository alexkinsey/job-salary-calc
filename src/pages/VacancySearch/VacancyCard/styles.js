import styled from 'styled-components';

export const StyledCard = styled.article`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin: 1rem 0;

  height: max-content;
  transition: all 0.5s ease-in-out;

  /* show border on selected cards */
  outline: ${({ theme, selected }) => (selected ? `1px solid ${theme.colors.primary}` : 'none')};

  :hover {
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
    outline: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;
