import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 5px;
  margin: 1rem 0;
  padding: 1rem;
  width: 100%;
  max-width: 350px;

  @media (max-width: ${({ theme }) => theme.sizes.sm}) {
    max-width: 100%;
  }
`;

export const Error = styled.span`
color: red;
font-size: 0.8rem;
margin-top: 0.25rem;
`;
