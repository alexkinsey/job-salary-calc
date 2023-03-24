import styled from 'styled-components';

export const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-bottom: 16px;

  height: max-content;
  transition: all 0.5s ease-in-out;
`;
