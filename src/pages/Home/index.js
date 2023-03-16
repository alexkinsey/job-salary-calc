// STYLES
import { BannerContainer, BannerImage, Section } from './style';

// IMAGES
import bannerImage from '../../assets/images/banner.jpg';

// COMPONENTS
import { PageBody } from '../../components/Layout/PageBody';
import { Title } from '../../components/Text/Title';
import { Heading } from '../../components/Text/Heading';
import { Text } from '../../components/Text/Text';
import { Link } from '../../components/Link';

export const Home = () => {
  return (
    <PageBody>
      <BannerContainer>
        <BannerImage src={bannerImage} />
        <Title>Calculate your pay or find a new job</Title>
      </BannerContainer>
      <Section>
        <Heading showUnderline>Pay Calculator</Heading>
        <Text>
          Calculate your pay using our pay calculator. Provide an amount over a pay period, for example £2600 a month,
          and the calculator will give you a break down of you hourly, weekly, month, and annual pay.
        </Text>
        <Text>
          Please note, the calculator does not factor income tax. To find out more about income tax please visit GOV.UK
          for more information.
        </Text>
        <Link location="https://www.gov.uk/topic/personal-tax/income-tax" isExternal={true}>
          GOV.UK - Income Tax
        </Link>
      </Section>
      <Section>
        <Heading showUnderline>Job Vacancy Search</Heading>
        <Text>
          Find a new job using our job search. Search for jobs by location, job title, or company name. You can also
          filter your search by pay, job type, and job category.
        </Text>
      </Section>
    </PageBody>
  );
};
