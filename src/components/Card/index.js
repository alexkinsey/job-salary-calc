import { StyledCard } from './styles';
import { Subheading } from '../Text/Subheading';
import { Text } from '../Text/Text';

export const Card = ({ jobTitle, hourlyRate, weeklyRate, monthlyRate, yearlyRate }) => {
  return (
    <StyledCard>
      <Subheading>{jobTitle}</Subheading>
      <Text>Hourly Rate: {hourlyRate}</Text>
      <Text>Weekly Rate: {weeklyRate}</Text>
      <Text>Monthly Rate: {monthlyRate}</Text>
      <Text>Yearly Rate: {yearlyRate}</Text>
    </StyledCard>
  );
};
