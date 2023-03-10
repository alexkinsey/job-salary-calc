import styled from 'styled-components';
import { StyledHeading } from '../../components/Text/Heading/style';
import { font } from '../../styles/Theme';

export const HomeContainer = styled.section`
  max-width: ${({ theme }) => theme.sizes.lg};
  min-width: ${({ theme }) => theme.sizes.xs};
  padding: 0 20px;
  margin: 0 auto;
`;

export const BannerContainer = styled.div`
    position: relative;
  @media (max-width: ${({ theme }) => theme.sizes.lg}) {
    width: 100vw;
    left: calc(-50vw + 50%);
  }

  & ${StyledHeading} {
    position: absolute;
    bottom: 0;
    margin: 2.5%;

    color: ${({ theme }) => theme.colors.textWhite};
    ${font.title};
    text-shadow: 0 0 10px ${({ theme }) => theme.colors.textBlack};
  }
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* margin-bottom: 2em; */
`;
