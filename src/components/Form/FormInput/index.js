import PropTypes from 'prop-types';
import { Input, Label } from './style';
import { Error } from '../style';

// This component takes in a label, and any other props that an input element can take
export const FormInput = ({ label, error, ...props }) => {
  // Replace spaces with dashes
  let labelId = label.replace(/\s+/g, '-');

  return (
    <div>
      <Label htmlFor={labelId}>{label}</Label>
      <Input id={labelId} {...props} />
      {error && <Error>{error}</Error>}
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
  maxLength: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};
