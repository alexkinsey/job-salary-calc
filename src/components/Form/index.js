import { PropTypes } from 'prop-types';

import { StyledForm } from './style';

// This component takes in a function to be called when the form is submitted
export const Form = ({ children, onSubmit }) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};

// Set prop types
Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
