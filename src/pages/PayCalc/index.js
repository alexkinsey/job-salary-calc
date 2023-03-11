import { useState, useEffect } from 'react';

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
  const [selectedPayPeriod, setSelectedPayPeriod] = useState('Select an option');
  const handlePayPeriodChange = (event) => {
    setSelectedPayPeriod(event.target.value);
  };
  const [hoursPerWeek, setHoursPerWeek] = useState('');

  const [results, setResults] = useState([]);
  useEffect(() => {
    const session = sessionStorage.getItem("results");
    if (session.length > 0){
      setResults(JSON.parse(session));
    } else {
      setResults([]);
    }
  }, []);
  useEffect(() => {
    if (results.length > 0) {
    sessionStorage.setItem("results", JSON.stringify(results));
    } 
  }, [results]);

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
          <h2>Results</h2>
          <ul>
            {results.map((result, index) => (
              <li key={index}>
                <h3>{result.jobTitle}</h3>
                <p>Hourly Rate: {result.hourlyRate}</p>
                <p>Weekly Rate: {result.weeklyRate}</p>
                <p>Monthly Rate: {result.monthlyRate}</p>
                <p>Yearly Rate: {result.yearlyRate}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </PageBody>
  );
};
