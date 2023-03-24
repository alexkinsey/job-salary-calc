import { useState } from 'react';

import { StyledCard } from './styles';
import { HR } from '../../../components/Text/HR.style';

import { Subheading } from '../../../components/Text/Subheading';
import { Text } from '../../../components/Text/Text';
import { fetchDescriptionByTitle } from '../../../services/vacancyApi';

export const VacancyCard = ({ vacancy }) => {
  const [selected, setSelected] = useState(false);

  const [description, setDescription] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleCardClick = () => {
    setSelected(!selected);
    async function fetchData() {
      try {
        const data = await fetchDescriptionByTitle(vacancy.title);
        setDescription(data[0].description);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    }
    fetchData();

    console.log(description);
  };

  return (
    <StyledCard onClick={handleCardClick} selected={selected}>
      <Subheading>{vacancy.title}</Subheading>
      <Text>{vacancy.company}</Text>
      {selected && (
        <>
          <HR />
          <Text>Location: {vacancy.location.location}</Text>
          <Text>{vacancy.summary}</Text>
          <HR />
          {!isLoading && <Text>Loading...</Text>}
          {error && <Text>{error}</Text>}
          {description && (
            <>
              <Text>What is a {vacancy.title}?</Text>
              <Text>{description}</Text>
            </>
          )}
        </>
      )}
    </StyledCard>
  );
};
