import { Form } from '../../../components/Form';
import { FormButton } from '../../../components/Form/FormButton';
import { FormInput } from '../../../components/Form/FormInput';
import { FormSelect } from '../../../components/Form/FormSelect';
import { parseCurrency, parseHoursPerWeek, toTitleCase } from '../helpers';

// This component handles the form for the Pay Calculator page
export const PayCalcForm = ({
  handleSubmit,
  jobTitle,
  setJobTitle,
  payAmount,
  setPayAmount,
  payPeriods,
  selectedPayPeriod,
  setSelectedPayPeriod,
  hoursPerWeek,
  setHoursPerWeek,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <FormInput
        type="text"
        label="Job Title"
        placeholder="Enter a job title"
        value={jobTitle}
        onChange={(e) => setJobTitle(toTitleCase(e.target.value))}
      />
      <FormInput
        type="text"
        label="Pay Amount"
        placeholder="£3200.00"
        value={payAmount}
        onChange={(e) => setPayAmount(parseCurrency(e.target.value))}
      />
      <FormSelect
        label="Pay Period"
        options={payPeriods}
        selectedOption={selectedPayPeriod}
        handleOptionChange={(e) => setSelectedPayPeriod(e.target.value)}
      />
      <FormInput
        type="number"
        label="Hours per Week"
        placeholder="35"
        value={hoursPerWeek}
        onChange={(e) => setHoursPerWeek(parseHoursPerWeek(e.target.value))}
        min="0"
        max="168"
      />
      <FormButton />
    </Form>
  );
};
