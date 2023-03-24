import { useState, useEffect } from 'react';

// COMPONENTS
import { PageBody } from '../../components/Layout/PageBody';
import { Heading } from '../../components/Text/Heading';
import { Text } from '../../components/Text/Text';
import { Title } from '../../components/Text/Title';
import { VacancyCard } from '../../components/VacancyCard';
import { Button } from '../../components/Button';

// HELPERS
import { fetchVacancyRecent, fetchVacancyBySearch } from '../../services/vacancyApi';
import { Input } from '../../components/Form/FormInput/style';

export const VacancySearch = () => {
  const [vacancies, setVacancies] = useState([]);
  const [foundVacancies, setFoundVacancies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchVacancyRecent();
        // keep only the first 10 results
        setVacancies(data.slice(0, 10));
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    async function fetchData() {
      try {
        const data = await fetchVacancyBySearch(searchTerm);
        // keep only the first 10 results
        if (data.length > 0) {
          setFoundVacancies([{title: 'No vacancies found'}]);
        } else {
          setFoundVacancies(data.slice(0, 10));
        }
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    }
    fetchData();
    
  };

  const handleClear = () => {
    setSearchTerm('');
    setFoundVacancies([]);
  };

  return (
    <PageBody>
      <Title>Vacancy Search</Title>
      <Text>
        Search for a vacancy by title, company, location or keyword. You can also search for a specific job type.
      </Text>
      <form onSubmit={handleSearch}>
        <Input
          type="text"
          placeholder="Search for a vacancy"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button type="submit">Search</Button>
        <Button secondary type="button" onClick={handleClear}>
          Clear
        </Button>
      </form>

      {isLoading ? <Text>Loading...</Text> : error && <Text>{error}</Text>}

      {!isLoading && foundVacancies.length === 0 && vacancies && (
        <>
          <Text>The 10 most recent vacancies:</Text>
          {vacancies.map((vacancy) => (
            <VacancyCard key={vacancy.id}>
              <Heading>{vacancy.title}</Heading>
              <Text>{vacancy.company}</Text>
              {/* <Text>{JSON.stringify(vacancy)}</Text> */}
            </VacancyCard>
          ))}
        </>
      )}

      {!isLoading && foundVacancies.length > 0 && (
        <>
          <Text>
            The 10 most recent vacancies found for "<strong>{searchTerm}</strong>"
          </Text>
          {foundVacancies.map((vacancy) => (
            <VacancyCard key={vacancy.id}>
              <Heading>{vacancy.title}</Heading>
              <Text>{vacancy.company}</Text>
              {/* <Text>{JSON.stringify(vacancy)}</Text> */}
            </VacancyCard>
          ))}
        </>
      )}
    </PageBody>
  );
};
