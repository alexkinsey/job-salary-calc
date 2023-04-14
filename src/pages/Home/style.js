import styled from 'styled-components';
import { StyledTitle } from '../../components/Text/Title/style';

export const BannerContainer = styled.header`
  position: relative;

  /* for screens smaller than the large size make the image span the whole width of the page */
  @media (max-width: ${({ theme }) => theme.sizes.lg}) {
    width: 100vw;
    left: calc(-50vw + 50%);
  }

  /* specific styling for the title inside the image */
  & ${StyledTitle} {
    position: absolute;
    bottom: 0;
    margin: 1rem 2.5%;

    color: ${({ theme }) => theme.colors.textWhite};
    text-shadow: 0 2px 10px black;
  }
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Section = styled.section`
  margin: 0 0 2rem 0;
`;

export const HomeCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 2rem 0;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.small};
  border-radius: 1rem;
  @media (max-width: ${({ theme }) => theme.sizes.lg}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const HomeCardImage = styled.img`
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  /* border-radius: 1rem 0 0 1rem; */
  border-radius: ${({ right }) => (right ? '0 1rem 1rem 0' : '1rem 0 0 1rem')};
`;

export const HomeCardContent = styled.div`
  padding: 2rem;
`;