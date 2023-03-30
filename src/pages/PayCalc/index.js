import { useState } from 'react';

// COMPONENTS
import { PageBody } from '../../common/styles/PageBody';
import { Heading } from '../../components/Text/Heading';
import { Text } from '../../components/Text/Text';
import { Title } from '../../components/Text/Title';
import { PayCalcForm } from './PayCalcForm';
import { Card } from './PayCard';

// STYLES
import { CardContainer, FormContainer } from './style';

// HELPERS
import { calculatePay } from './helpers/calculatePay';
import { validateForm } from './helpers/validateForm';

export const PayCalc = () => {
  // This is the array of options for the pay period select
  const payPeriods = [
    { value: 'hourly', label: 'Hourly' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'yearly', label: 'Yearly' },
  ];

  // State for the form is set up here
  const [formData, setFormData] = useState({
    jobTitle: '',
    payAmount: '',
    selectedPayPeriod: 'yearly',
    hoursPerWeek: '',
  });
  // Error state for the form
  const [error, setError] = useState({
    eJobTitle: '',
    ePayAmount: '',
    eHoursPerWeek: '',
  });

  // Session Storage of the results is set up here
  const [results, setResults] = useState(() => {
    const session = sessionStorage.getItem('results');
    return session ? JSON.parse(session) : [];
  });

  // This function is used to handle the form submission, calculate the pay, and add the result to the results state
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validates form data and shows inline errors if incorrect
    if (!validateForm(formData, setError)) {
      return;
    }
    const result = {
      ...formData,
      ...calculatePay(formData.payAmount, formData.selectedPayPeriod, formData.hoursPerWeek),
    };
    // Adds the result to the results state and session storage
    setResults((prevResults) => [...prevResults, result]);
    sessionStorage.setItem('results', JSON.stringify([...results, result]));
  };

  // This function is used to handle the deletion of a result
  const handleDelete = (index) => {
    const newResults = results.filter((result, i) => i !== index);
    setResults(newResults);
    sessionStorage.setItem('results', JSON.stringify(newResults));
  };

  console.log("hit");

  return (
    <PageBody>
      <Title>Pay Calculator</Title>

      <FormContainer>
        <PayCalcForm
          handleSubmit={handleSubmit}
          formData={formData}
          setFormData={setFormData}
          payPeriods={payPeriods}
          error={error}
        />
        <Text>
          Take a moment to provide information your information below. Once you have completed the form, press
          Calculate, and your results will appear in cards. You can enter in information for as many jobs as you like.
          The results will be saved in this browser tab. If you would like to remove a result, you can do so by pressing
          the red X in the top right of the card.
        </Text>
      </FormContainer>

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
