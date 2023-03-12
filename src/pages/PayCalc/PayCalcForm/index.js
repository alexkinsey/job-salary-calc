import { Form } from '../../../components/Form';
import { FormButton } from '../../../components/Form/FormButton';
import { FormInput } from '../../../components/Form/FormInput';
import { FormSelect } from '../../../components/Form/FormSelect';

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
        min="0"
        max="1000000000000"
        step="0.01"
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
        placeholder="Enter number"
        value={hoursPerWeek}
        onChange={(e) => setHoursPerWeek(e.target.value)}
        min="0"
        max="168"
      />
      <FormButton />
    </Form>
  );
};