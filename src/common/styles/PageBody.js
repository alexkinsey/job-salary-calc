import styled from 'styled-components';

export const PageBody = styled.main`
  max-width: ${({ theme }) => theme.sizes.lg};
  min-width: ${({ theme }) => theme.sizes.xs};
  padding: 0 20px 1rem;
  margin: 0 auto 3rem auto;
`;
