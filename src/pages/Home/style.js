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
