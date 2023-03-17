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
        <Text>
          Welcome to our job search and pay calculator application. This tool makes it simple and quick for you to find
          open positions and calculate your pay. With our intuitive and user-friendly interface, you can find the
          information you need in just a few clicks.
        </Text>
        <Heading showUnderline>Pay Calculator</Heading>
        <Text>
          Use our pay calculator to get a breakdown of your hourly, weekly, monthly, and annual pay. It's a great tool
          to help you understand your income and help plan your finances. Simply provide an amount over a pay period and
          the hours you work, for example, £2600 a month, at 35 hours a week, and the calculator will output the result.
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
        <Heading showUnderline>Vacancy Search</Heading>
        <Text>
          Find a new job with our vacancy search. Enter relevant keywords, which helps to refine your job search and
          provide you with a list of jobs that match your search criteria.
        </Text>
        <Text>
          We have partnered with the Deportment of Education to provide real-time updates on vacancies, ensuring that
          you have access to the latest job openings.
        </Text>
        <Text>
          Finding the right job can be challenging, and that's why we're committed to making our vacancy search feature
          as user-friendly and efficient as possible.
        </Text>
      </Section>
    </PageBody>
  );
};
