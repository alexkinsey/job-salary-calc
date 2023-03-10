import React from 'react';
import { Input, Label } from './style';

// This component takes in a type, label, placeholder, value, and onChange function
export const FormInput = ({ type, label, placeholder, value, onChange }) => {
  // Replace spaces with dashes
  let labelId = label.replace(/\s+/g, '-');

  return (
    <div>
      <Label htmlFor={labelId}>{label}</Label>
      <Input id={labelId} type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

FormInput.defaultProps = {
  type: 'text',
  label: 'Input',
  placeholder: 'Enter text',
};
