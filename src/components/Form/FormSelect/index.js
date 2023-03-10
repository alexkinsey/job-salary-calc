import React from 'react';
import { Select, Label } from './style';

// This component takes in a label, options, selectedOption, and handleOptionChange function
// Options is an array of objects with a value and label
export const FormSelect = ({ label, options, selectedOption, handleOptionChange }) => {
  // Replace spaces with dashes
  let labelId = label.replace(/\s+/g, '-');

  // Map over options and create an option element for each
  const optionsList = options.map((option) => {
    return <option key={option.value} value={option.value}>{option.label}</option>;
  });

  return (
    <div>
      <Label htmlFor={labelId}>{label}</Label>
      <Select id={labelId} value={selectedOption} onChange={handleOptionChange}>
        {optionsList}
      </Select>
    </div>
  );
};

FormSelect.defaultProps = {
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  label: 'Select',
};