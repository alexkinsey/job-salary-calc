import styled from "styled-components";

export const Label = styled.label`
  display: block;
  margin: 0.5rem 0.2rem;
`;

export const Select = styled.select`
  display: block;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 5px;
  margin: 0.5rem 0;
  width: 100%;
`;