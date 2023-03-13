import { useState, useEffect } from 'react';

// COMPONENTS
import { PageBody } from '../../components/Layout/PageBody';
import { Heading } from '../../components/Text/Heading';
import { Text } from '../../components/Text/Text';
import { Title } from '../../components/Text/Title';
import { PayCalcForm } from './PayCalcForm';
import { Card } from '../../components/Card';

// STYLES
import { CardContainer } from './style';

// HELPERS
import { calculatePay } from './helpers/calculatePay';

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
  const [selectedPayPeriod, setSelectedPayPeriod] = useState('yearly');
  const [hoursPerWeek, setHoursPerWeek] = useState('');

  // Session Storage of the results is set up here
  const [results, setResults] = useState([]);
  // This useEffect is used to get the results from session storage on page load
  useEffect(() => {
    console.log('hit 1');
    const session = sessionStorage.getItem('results');
    if (session) {
      setResults(JSON.parse(session));
    } else {
      setResults([]);
    }
  }, []);

  // This function is used to handle the form submission, calculate the pay, and add the result to the results state
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = {
      jobTitle,
      hoursPerWeek,
      selectedPayPeriod,
      payAmount,
      ...calculatePay(payAmount, selectedPayPeriod, hoursPerWeek),
    };
    setResults([...results, result]);
    sessionStorage.setItem('results', JSON.stringify([...results, result]));
  };

  // This function is used to handle the deletion of a result
  const handleDelete = (index) => {
    const newResults = results.filter((result, i) => i !== index);
    setResults(newResults);
    sessionStorage.setItem('results', JSON.stringify(newResults));
  };

  return (
    <PageBody>
      <section>
        <Title>Pay Calculator</Title>
        <Text>
          Take a moment to provide information your information below. Once you have completed the form, press
          Calculate, and your results will appear in cards. You can enter in information for as many jobs as you 
          like. The results will be saved in this browser tab. If you would like to clear a result, you
          can do so by pressing the red X in the top right of the card.
        </Text>
      </section>

      <PayCalcForm
        handleSubmit={handleSubmit}
        jobTitle={jobTitle}
        setJobTitle={setJobTitle}
        payAmount={payAmount}
        setPayAmount={setPayAmount}
        payPeriods={payPeriods}
        selectedPayPeriod={selectedPayPeriod}
        setSelectedPayPeriod={setSelectedPayPeriod}
        hoursPerWeek={hoursPerWeek}
        setHoursPerWeek={setHoursPerWeek}
      />
      <section>
        <Heading showUnderline>Results</Heading>
        {results.length > 0 ? (
          <CardContainer>
            {results.map((result, index) => (
              <Card key={index} index={index} {...result} handleDelete={handleDelete} />
            ))}
          </CardContainer>
        ) : (
          <Text>Your results will appear here</Text>
        )}
      </section>
    </PageBody>
  );
};
