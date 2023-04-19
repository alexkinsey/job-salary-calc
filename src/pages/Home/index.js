// STYLES
import { HomeCard, HomeCardImageContainer, HomeCardImage, HomeCardContent } from './style';

// IMAGES
import calculatingImage from '../../assets/images/calculating.jpeg';
import moneyImage from '../../assets/images/money.jpeg';

// COMPONENTS
import { PageBody } from '../../common/styles/PageBody';
import { Title, Heading, Text, Link } from '../../components';

// ROUTES
import { PAY_CALCULATOR_ROUTE, VACANCY_SEARCH_ROUTE } from '../../constants/routes';

// This component is used to display the home page
export const Home = () => {
  return (
    <PageBody>
      <header>
        <Title>Calculate your pay or find a new job</Title>
        <Text>
          Welcome to our job search and pay calculator application. This tool makes it simple and quick for you to find
          open positions and calculate your pay. With our intuitive and user-friendly interface, you can find the
          information you need in just a few clicks.
        </Text>
      </header>

      <HomeCard>
        <HomeCardContent>
          <Heading showUnderline>Pay Calculator</Heading>
          <Text>
            Use our pay calculator to get a breakdown of your hourly, weekly, monthly, and annual pay. It's a great tool
            to help you understand your income and help plan your finances. Simply provide an amount over a pay period
            and the hours you work, for example, £2600 a month, at 35 hours a week, and the calculator will output the
            result.
          </Text>
          <Link location={PAY_CALCULATOR_ROUTE}>Take me to the calculator</Link>
          <Text>
            Please note, the calculator does not factor income tax. To find out more about income tax please visit
            GOV.UK for more information.
          </Text>
          <Link location="https://www.gov.uk/topic/personal-tax/income-tax" isExternal>
            GOV.UK - Income Tax
          </Link>
        </HomeCardContent>
        <HomeCardImageContainer right>
          <HomeCardImage src={moneyImage} alt="money" />
        </HomeCardImageContainer>
      </HomeCard>
      
      <HomeCard>
        <HomeCardImageContainer>
          <HomeCardImage src={calculatingImage} alt="Job searching" />
        </HomeCardImageContainer>
        <HomeCardContent>
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
            Finding the right job can be challenging, and that's why we're committed to making our vacancy search
            feature as user-friendly and efficient as possible.
          </Text>
          <Link location={VACANCY_SEARCH_ROUTE}>Take me to the vacancy search</Link>
        </HomeCardContent>
      </HomeCard>
    </PageBody>
  );
};
