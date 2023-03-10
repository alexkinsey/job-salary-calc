import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 5px;
  margin: 1rem 0;
  width: 350px;
`;