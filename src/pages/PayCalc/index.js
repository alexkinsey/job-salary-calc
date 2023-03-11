import { useState, useEffect } from 'react';
import { Card } from '../../components/Card';

// COMPONENTS
import { PageBody } from '../../components/Layout/PageBody';
import { Heading } from '../../components/Text/Heading';
import { Text } from '../../components/Text/Text';
import { Title } from '../../components/Text/Title';
import { calculatePay } from './helpers';
import { PayCalcForm } from './PayCalcForm';

export const PayCalc = () => {
  // This is the array of options for the pay period select
  const payPeriods = [
    { value: 'hourly', label: 'Hourly' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'yearly', label: 'Yearly' },
  ];

  // State for the form is set up here
  const [jobTitle, setJobTitle] = useState('');
  const [payAmount, setPayAmount] = useState('');
  const [selectedPayPeriod, setSelectedPayPeriod] = useState('Select an option');
  const handlePayPeriodChange = (event) => {
    setSelectedPayPeriod(event.target.value);
  };
  const [hoursPerWeek, setHoursPerWeek] = useState('');

  // Session Storage of the results is set up here
  const [results, setResults] = useState([]);
  // This useEffect is used to get the results from session storage on page load
  useEffect(() => {
    const session = sessionStorage.getItem('results');
    if (session.length > 0) {
      setResults(JSON.parse(session));
    } else {
      setResults([]);
    }
  }, []);
  // This useEffect is used to set the results to session storage when the results state changes
  useEffect(() => {
    if (results.length > 0) {
      sessionStorage.setItem('results', JSON.stringify(results));
    }
  }, [results]);

  // This function is used to handle the form submission, calculate the pay, and add the result to the results state
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = { jobTitle, ...calculatePay(payAmount, selectedPayPeriod, hoursPerWeek) };
    setResults([...results, result]);
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
      {results.length > 0 && (
        <div>
          <Heading showUnderline>Results</Heading>
          {results.map((result, index) => (
            <Card key={index} {...result} />
          ))}
        </div>
      )}
    </PageBody>
  );
};
