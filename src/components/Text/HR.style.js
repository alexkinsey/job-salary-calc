import styled from "styled-components";

export const HR = styled.hr`
  border: solid 2px ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  width: 50px;
  margin: 0.5rem 0 1rem 0;
`;
