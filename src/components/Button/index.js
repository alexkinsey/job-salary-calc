import { PropTypes } from 'prop-types';

import { StyledButton } from './style';

// This component takes in optional props like black, medium, and secondary to change the style of the button
export const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

// Set prop types
Button.propTypes = {
  children: PropTypes.node.isRequired,
  black: PropTypes.bool,
  medium: PropTypes.bool,
  secondary: PropTypes.bool,
};
// Set default props
Button.defaultProps = {
  black: false,
  medium: false,
  secondary: false,
};