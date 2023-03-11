import PropTypes from 'prop-types';
import { StyledTitle } from './style';
import { HR } from '../HR.style';

// This component takes in a boolean value for showUnderline
// If showUnderline is true, an underline will display
export const Title = ({ children, showUnderline }) => {
  return (
    <StyledTitle>
      {children}
      {showUnderline && <HR />}
    </StyledTitle>
  );
};

// Set prop types
Title.propTypes = {
  children: PropTypes.node.isRequired,
  showUnderline: PropTypes.bool,
};
// Set default props
Title.defaultProps = {
  showUnderline: false,
};
