import styled from 'styled-components';

export const HomeCard = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 2rem 0;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.large};
  border-radius: 1rem;
  /* change the grid layout on mobile */
  @media (max-width: ${({ theme }) => theme.sizes.ms}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

// The image container is required to so the image child displays at the correct size in safari
export const HomeCardImageContainer = styled.div`
  height: 100%;
  border-radius: ${({ right }) => (right ? '0 1rem 1rem 0' : '1rem 0 0 1rem')};
  overflow: hidden;
  /* push the image below the card content and change the rounded corners on mobile */
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
  /* push the card content to the top of the card on mobile */
  @media (max-width: ${({ theme }) => theme.sizes.ms}) {
    order: 0;
  }
`;