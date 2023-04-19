import PropTypes from 'prop-types';
import { StyledText } from './style';

// This component takes in optional props like black and medium to change the style of the text
export const Text = ({ children, black, medium }) => {
  return (
    <StyledText black={black} medium={medium}>
      {children}
    </StyledText>
  );
};

// Set prop types
Text.propTypes = {
  children: PropTypes.node.isRequired,
  black: PropTypes.bool,
  medium: PropTypes.bool,
};
// Set default props
Text.defaultProps = {
  black: false,
  medium: false,
};
