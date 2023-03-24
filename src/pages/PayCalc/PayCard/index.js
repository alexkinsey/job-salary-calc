import PropTypes from 'prop-types';

// STYLES
import { DeleteButton, StyledCard } from './styles';
import { IoCloseCircleOutline, IoCloseCircleSharp } from 'react-icons/io5';

// COMPONENTS
import { Text } from '../../../components/Text/Text';
import { Subheading } from '../../../components/Text/Subheading';

export const Card = ({
  index,
  jobTitle,
  hoursPerWeek,
  selectedPayPeriod,
  payAmount,
  hourlyRate,
  weeklyRate,
  monthlyRate,
  yearlyRate,
  handleDelete,
}) => {
  return (
    <StyledCard>
      <Subheading>{jobTitle}</Subheading>
      <Text>
        Working <b>{hoursPerWeek}</b> hours a week for <b>{payAmount}</b> per <b>{selectedPayPeriod.slice(0, -2)}</b>{' '}
        breaks down into:
      </Text>
      <Text>£{hourlyRate} per hour</Text>
      <Text>£{weeklyRate} per week</Text>
      <Text>£{monthlyRate} per month</Text>
      <Text>£{yearlyRate} per year</Text>
      <DeleteButton onClick={() => handleDelete(index)}>
        <IoCloseCircleOutline id="x-outline" />
        <IoCloseCircleSharp id="x-fill" />
      </DeleteButton>
    </StyledCard>
  );
};

Card.prototype = {
  jobTitle: PropTypes.string.isRequired,
  hourlyRate: PropTypes.string.isRequired,
  weeklyRate: PropTypes.string.isRequired,
  monthlyRate: PropTypes.string.isRequired,
  yearlyRate: PropTypes.string.isRequired,
};
