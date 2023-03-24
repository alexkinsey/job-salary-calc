import PropTypes from 'prop-types';
import { StyledText } from './style';

export const Text = ({ children, black }) => {
  return <StyledText black={black}>{children}</StyledText>;
};

// Set prop types
Text.propTypes = {
  children: PropTypes.node.isRequired,
  black: PropTypes.bool,
};
