import { useState, useEffect } from 'react';

// COMPONENTS
import { PageBody } from '../../components/Layout/PageBody';
import { Heading } from '../../components/Text/Heading';
import { Text } from '../../components/Text/Text';
import { Title } from '../../components/Text/Title';

import { fetchVacancyRecent } from '../../services/vacancyApi';

export const VacancySearch = () => {
  const [vacancies, setVacancies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchVacancyRecent();
        setVacancies(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  const vacancies10MostRecent = vacancies.slice(0, 10);

  return (
    <PageBody>
      <Title>Vacancy Search</Title>
      <Text>
        Search for a vacancy by title, company, location or keyword. You can also search for a specific job type.
      </Text>
      <Text>The 10 most recent vacancies will display below.</Text>
      {!isLoading ? (
        vacancies10MostRecent.map((vacancy) => (
          <div key={vacancy.id}>
            <Heading>{vacancy.title}</Heading>
            <Text>{vacancy.company}</Text>
          </div>
        ))
      ) : isLoading ? (
        <Text>Loading...</Text>
      ) : (
        error && <Text>{error}</Text>
      )}
    </PageBody>
  );
};
