import PropTypes from 'prop-types';
import { Input, Label } from './style';

// This component takes in a type, label, placeholder, value, and onChange function
export const FormInput = ({ label, ...props}) => {
  // Replace spaces with dashes
  let labelId = label.replace(/\s+/g, '-');

  return (
    <div>
      <Label htmlFor={labelId}>{label}</Label>
      <Input id={labelId} {...props}/>
    </div>
  );
};

FormInput.defaultProps = {
  type: 'text',
  label: 'Input',
  placeholder: 'Enter text',
};
FormInput.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};