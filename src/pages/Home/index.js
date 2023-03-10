import { Heading } from '../../components/Text/Heading';
import { BannerContainer, BannerImage, HomeContainer } from './style';

import bannerImage from '../../images/banner.jpg';

export const Home = () => {
  return (
    <HomeContainer>
      <BannerContainer>
        <BannerImage src={bannerImage} />
        <Heading>Calculate your take home pay or find a new job</Heading>
      </BannerContainer>
    </HomeContainer>
  );
};
