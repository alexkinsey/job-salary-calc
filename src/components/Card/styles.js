import styled from "styled-components";

export const StyledCard = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin: 1rem 0;
`;