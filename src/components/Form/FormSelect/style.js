import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  margin: 0.5rem 0.2rem;
`;

export const Select = styled.select`
  display: block;
  color: ${({ theme }) => theme.colors.textBlack};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 5px;
  margin: 0.5rem 0;
  padding: 0.5rem;
  width: 100%;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;
