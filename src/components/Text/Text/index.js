import PropTypes from 'prop-types';
import { StyledText } from './style';

export const Text = ({ children }) => {
  return <StyledText>{children}</StyledText>;
};

// Set prop types
Text.propTypes = {
  children: PropTypes.node.isRequired,
};
