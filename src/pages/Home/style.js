import styled from 'styled-components';

export const HomeCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 2rem 0;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.large};
  border-radius: 1rem;
  @media (max-width: ${({ theme }) => theme.sizes.ms}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const HomeCardImageContainer = styled.div`
  height: 100%;
  border-radius: ${({ right }) => (right ? '0 1rem 1rem 0' : '1rem 0 0 1rem')};
  overflow: hidden;
  @media (max-width: ${({ theme }) => theme.sizes.ms}) {
    border-radius: 0 0 1rem 1rem;
    order: 1;
  }
`;

export const HomeCardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const HomeCardContent = styled.div`
  padding: 2rem;
  margin: auto;
  @media (max-width: ${({ theme }) => theme.sizes.ms}) {
    order: 0;
  }
`;