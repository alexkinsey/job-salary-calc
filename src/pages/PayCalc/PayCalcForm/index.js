// COMPONENTS
import { Form, Button, FormInput, FormSelect } from '../../../components';

// HELPERS
import { parseCurrency } from '../../../utils/helpers/parseCurrency';
import { parseHoursPerWeek } from '../../../utils/helpers/parseHoursPerWeek';
import { toTitleCase } from '../../../utils/helpers/toTitleCase';

// This component handles the form for the Pay Calculator page
export const PayCalcForm = ({
  handleSubmit,
  payPeriods,
  formData,
  setFormData,
  error
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <FormInput
        type="text"
        label="Job Title"
        placeholder="Enter a job title"
        value={formData.jobTitle}
        onChange={(e) => setFormData({ ...formData, jobTitle: toTitleCase(e.target.value) })}
        error={error.eJobTitle}
      />
      <FormInput
        type="text"
        label="Pay Amount"
        placeholder="£3200.00"
        maxLength="10"
        value={formData.payAmount}
        onChange={(e) => setFormData({ ...formData, payAmount: parseCurrency(e.target.value) })}
        error={error.ePayAmount}
      />
      <FormSelect
        label="Pay Period"
        options={payPeriods}
        selectedOption={formData.selectedPayPeriod}
        handleOptionChange={(e) => setFormData({ ...formData, selectedPayPeriod: e.target.value })}
        required
      />
      <FormInput
        type="number"
        label="Hours per Week"
        placeholder="35"
        min="0"
        max="168"
        value={formData.hoursPerWeek}
        onChange={(e) => setFormData({ ...formData, hoursPerWeek: parseHoursPerWeek(e.target.value) })}
        error={error.eHoursPerWeek}
      />
      <Button>Calculate</Button>
    </Form>
  );
};
