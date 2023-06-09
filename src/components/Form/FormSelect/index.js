import PropTypes from 'prop-types';
import { Select, Label } from './style';

// This component takes in a label, options, selectedOption, and handleOptionChange function
// Options is an array of objects with a value and label
export const FormSelect = ({ label, options, selectedOption, handleOptionChange, ...props }) => {
  // Replace spaces with dashes for label ID
  let labelId = label.replace(/\s+/g, '-');

  // Map over options and create an option element for each
  const optionsList = options.map((option) => {
    return (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    );
  });

  return (
    <div>
      <Label htmlFor={labelId}>{label}</Label>
      <Select id={labelId} value={selectedOption} onChange={handleOptionChange} {...props}>
        <option key="0" value="" disabled>
          Select an option
        </option>
        {optionsList}
      </Select>
    </div>
  );
};

// Set prop types
FormSelect.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  selectedOption: PropTypes.string.isRequired,
  handleOptionChange: PropTypes.func.isRequired,
};
// Set default props
FormSelect.defaultProps = {
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  label: 'Select',
};
