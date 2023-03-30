import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// COMPONENTS
import { StyledCard } from './styles';
import { HR } from '../../../components/Text/HR.style';
import { Subheading } from '../../../components/Text/Subheading';
import { Text } from '../../../components/Text/Text';
import { Link } from '../../../components/Link';

// API CALL
import { fetchDescriptionByTitle } from '../../../services/vacancyApi';

// HELPERS
import { formatDate } from '../helpers/formatDate';
import { howManyDaysAgo } from '../helpers/howManyDaysAgo';

export const VacancyCard = ({ vacancy }) => {
  const [selected, setSelected] = useState(false);

  const [description, setDescription] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // fetch the description of the vacancy title
  const handleCardClick = () => {
    setSelected(!selected);
    if (!selected) {
      setDescription(null);
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
        className="card-animation-wrapper"
        // this wrapper allows the card to animate the height, an initial height is required
        initial={{ height: '4.5rem', opacity: 0 }}
        animate={{ height: selected ? 'auto' : '4.5rem', opacity: 1 }}
        exit={{ height: 'auto', opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <Subheading>{vacancy.title}</Subheading>
        <Text black>{vacancy.company}</Text>
        <AnimatePresence>
          {selected && (
            <motion.section
              // this wrapper allows the card content to animate the opacity
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
                <section>
                  <HR />
                  <Text black>What is a {vacancy.title}?</Text>
                  <Text>{description.description}</Text>
                  <Text black>Do I need qualifications?</Text>
                  <Text>{description.qualifications}</Text>
                  <Text black>What would I be responsible for?</Text>
                  <Text>{description.tasks}</Text>
                </section>
              )}
              <Link isExternal location={vacancy.link}>
                Learn more about the job
              </Link>
            </motion.section>
          )}
        </AnimatePresence>
      </motion.div>
    </StyledCard>
  );
};
