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
      <FormButton />
    </Form>
  );
};
