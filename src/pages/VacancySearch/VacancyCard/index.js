import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// COMPONENTS
import { StyledCard } from './styles';
import { Subheading, Text, HR, Link } from '../../../components';

// API CALL
import { fetchDescriptionByTitle } from '../../../utils/services/vacancyApi';

// HELPERS
import { formatDate } from '../../../utils/helpers/formatDate';
import { howManyDaysAgo } from '../../../utils/helpers/howManyDaysAgo';

// This component is used to display a vacancy card
export const VacancyCard = ({ vacancy }) => {
  const [selected, setSelected] = useState(false);

  const [description, setDescription] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // fetch the description of the vacancy title
  const handleCardClick = () => {
    setSelected(!selected);
    // if the description is already fetched, don't fetch again
    if (description) {
      return;
    }
    async function fetchData() {
      try {
        const data = await fetchDescriptionByTitle(vacancy.title);
        setDescription(data[0]);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    }
    fetchData();
  };

  return (
    <StyledCard onClick={handleCardClick} selected={selected}>
      <motion.div
        // this wrapper allows the card to animate a fade in
        className="card-animation-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <Subheading>{vacancy.title}</Subheading>
        <Text black>{vacancy.company}</Text>
        <AnimatePresence>
          {selected && (
            <motion.div
              // this wrapper allows the card content a fade in/out
              className="card-content-animation-wrapper"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <HR />
              <Text>Posted {howManyDaysAgo(vacancy.activedate.start)}</Text>
              <Text>Closing: {formatDate(vacancy.activedate.end)}</Text>
              <Text>Location: {vacancy.location.location}</Text>
              <Text>{vacancy.summary}</Text>
              {!isLoading && <Text>Loading...</Text>}
              {error && <Text>{error}</Text>}
              {description && (
                <>
                  <HR />
                  <Text medium black>What is a {vacancy.title}?</Text>
                  <Text>{description.description}</Text>
                  <Text medium black>Do I need qualifications?</Text>
                  <Text>{description.qualifications}</Text>
                  <Text medium black>What would I be responsible for?</Text>
                  <Text>{description.tasks}</Text>
                </>
              )}
              <Link isExternal location={vacancy.link}>
                Learn more about this job
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </StyledCard>
  );
};
