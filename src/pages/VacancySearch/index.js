import { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';

// COMPONENTS
import { ClearButton, SearchBar } from './style';
import { PageBody } from '../../common/styles/PageBody';
import { Title, Text, Button } from '../../components/';
import { VacancyCard } from './VacancyCard';

// HELPERS
import { fetchVacancyRecent, fetchVacancyBySearch } from '../../utils/services/vacancyApi';
import { Input } from '../../components/Form/FormInput/style';

// This component is used to display the vacancy search page
export const VacancySearch = () => {
  const [vacancies, setVacancies] = useState([]);
  const [foundVacancies, setFoundVacancies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // fetch the 10 most recent vacancies
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

  // handle search input and fetch vacancies
  const handleSearch = (e) => {
    e.preventDefault();
    async function fetchData() {
      try {
        const data = await fetchVacancyBySearch(searchTerm);
        // keep only the first 10 results
        if (data.length === 0) {
          setFoundVacancies([{ title: 'No vacancies found' }]);
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

  // clear the search bar and show the 10 most recent vacancies
  const handleClear = () => {
    setSearchTerm('');
    setFoundVacancies([]);
  };

  return (
    <PageBody>
      <Title>Vacancy Search</Title>
      <Text>
        Search for a role by typing a keyword in the search bar below. You can also click on the vacancy title to learn
        more about the job.
      </Text>
      {foundVacancies.length > 0 && <Text>Press the coloured X to show the 10 most recent roles.</Text>}
      <SearchBar onSubmit={handleSearch}>
        <Input
          type="text"
          placeholder="Search for a vacancy"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button type="submit">Search</Button>
        {/* show the clear button if there is text in the search bar  */}
        {searchTerm && (
          <ClearButton secondary type="button" onClick={handleClear}>
            <IoClose size={28} />
          </ClearButton>
        )}
      </SearchBar>

      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        ((!vacancies && error) || (!foundVacancies && error)) && <Text>{error}</Text>
      )}

      {/* show 10 most recent vacancies if retrieved from API */}
      {!isLoading && foundVacancies.length === 0 && vacancies && (
        <>
          <Text>The 10 most recent vacancies:</Text>
          {vacancies.map((vacancy) => (
            <VacancyCard key={vacancy.id} vacancy={vacancy} />
          ))}
        </>
      )}

      {/* show vacancies found by search term if retrieved from API */}
      {!isLoading && foundVacancies.length > 0 && (
        <>
          <Text>
            Top {foundVacancies.length} vacancies found for "<strong>{searchTerm}</strong>":
          </Text>
          {foundVacancies.map((vacancy) => (
            <VacancyCard key={vacancy?.id || 1} vacancy={vacancy} />
          ))}
        </>
      )}
    </PageBody>
  );
};
