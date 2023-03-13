// COMPONENTS
import { Form } from '../../../components/Form';
import { FormButton } from '../../../components/Form/FormButton';
import { FormInput } from '../../../components/Form/FormInput';
import { FormSelect } from '../../../components/Form/FormSelect';

// HELPERS
import { parseCurrency } from '../helpers/parseCurrency';
import { parseHoursPerWeek } from '../helpers/parseHoursPerWeek';
import { toTitleCase } from '../helpers/toTitleCase';

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
        required
      />
      <FormInput
        type="text"
        label="Pay Amount"
        placeholder="£3200.00"
        maxLength="10"
        value={payAmount}
        onChange={(e) => setPayAmount(parseCurrency(e.target.value))}
        required
      />
      <FormSelect
        label="Pay Period"
        options={payPeriods}
        selectedOption={selectedPayPeriod}
        handleOptionChange={(e) => setSelectedPayPeriod(e.target.value)}
        required
      />
      <FormInput
        type="number"
        label="Hours per Week"
        placeholder="35"
        value={hoursPerWeek}
        onChange={(e) => setHoursPerWeek(parseHoursPerWeek(e.target.value))}
        min="0"
        max="168"
        required
      />
      <FormButton />
    </Form>
  );
};
