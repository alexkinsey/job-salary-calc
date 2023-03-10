import { useState } from 'react';
import { Form } from '../../components/Form';
import { FormInput } from '../../components/Form/FormInput';
import { FormSelect } from '../../components/Form/FormSelect';
import { PageBody } from '../../components/Layout/PageBody';
import { Text } from '../../components/Text/Text';
import { Title } from '../../components/Text/Title';

export const PayCalc = () => {
  const PayPeriods = [
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'yearly', label: 'Yearly' },
  ];

  const [jobTitle, setJobTitle] = useState('');
  const [payAmount, setPayAmount] = useState('');
  const [selectedPayPeriod, setSelectedPayPeriod] = useState(PayPeriods[0].value);
  const handlePayPeriodChange = (event) => {
    setSelectedPayPeriod(event.target.value);
  };
  const [hoursPerWeek, setHoursPerWeek] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data here
  };

  return (
    <PageBody>
      <Title>Pay Calculator</Title>
      <Text>
        Please enter the details for each field and the result will be shown below. You can generate multiple results by
        pressing the button.
      </Text>
      {/* <Form>
        <FormInput type="text" label="Job Title" placeholder="Enter job title" />
        <FormInput type="number" label="Pay Amount" placeholder="Enter number" />
        <FormSelect label='Pay Period' options={PayPeriods}/>
        <FormInput type="number" label="Hours per Week" placeholder="Enter number" />
        <button type="submit">Calculate</button>
      </Form> */}
      <Form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          label="Job Title"
          placeholder="Enter job title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <FormInput
          type="number"
          label="Pay Amount"
          placeholder="Enter number"
          value={payAmount}
          onChange={(e) => setPayAmount(e.target.value)}
        />
        <FormSelect
          label="Pay Period"
          options={PayPeriods}
          selectedOption={selectedPayPeriod}
          handleOptionChange={handlePayPeriodChange}
        />

        <FormInput
          type="number"
          label="Hours per Week"
          placeholder="Enter number"
          value={hoursPerWeek}
          onChange={(e) => setHoursPerWeek(e.target.value)}
        />
        <button type="submit">Calculate</button>
      </Form>
    </PageBody>
  );
};
