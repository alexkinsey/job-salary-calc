import { useState } from 'react';

// COMPONENTS
import { PageBody } from '../../components/Layout/PageBody';
import { Text } from '../../components/Text/Text';
import { Title } from '../../components/Text/Title';
import { calculatePay } from './helpers';
import { PayCalcForm } from './PayCalcForm';

export const PayCalc = () => {
  const payPeriods = [
    { value: 'hourly', label: 'Hourly' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'yearly', label: 'Yearly' },
  ];

  const [jobTitle, setJobTitle] = useState('');
  const [payAmount, setPayAmount] = useState('');
  const [selectedPayPeriod, setSelectedPayPeriod] = useState(payPeriods[0].value);
  const handlePayPeriodChange = (event) => {
    setSelectedPayPeriod(event.target.value);
  };
  const [hoursPerWeek, setHoursPerWeek] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(calculatePay(payAmount, selectedPayPeriod, hoursPerWeek));
  };

  return (
    <PageBody>
      <Title>Pay Calculator</Title>
      <Text>
        Please enter the details for each field and the result will be shown below. You can generate multiple results by
        pressing the button.
      </Text>
      <PayCalcForm
        handleSubmit={handleSubmit}
        jobTitle={jobTitle}
        setJobTitle={setJobTitle}
        payAmount={payAmount}
        setPayAmount={setPayAmount}
        payPeriods={payPeriods}
        selectedPayPeriod={selectedPayPeriod}
        handlePayPeriodChange={handlePayPeriodChange}
        hoursPerWeek={hoursPerWeek}
        setHoursPerWeek={setHoursPerWeek}
      />
    </PageBody>
  );
};
