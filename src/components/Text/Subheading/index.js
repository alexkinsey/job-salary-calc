import PropTypes from 'prop-types';
import { StyledSubheading } from './style';
import { HR } from '../HR.style';

// This component takes in a boolean value for showUnderline
// If showUnderline is true, an underline will display
export const Subheading = ({ children, showUnderline }) => {
  return (
    <StyledSubheading>
      {children}
      {showUnderline && <HR />}
    </StyledSubheading>
  );
};

// Set prop types
Subheading.propTypes = {
  children: PropTypes.node.isRequired,
  showUnderline: PropTypes.bool,
};

// Set default props
Subheading.defaultProps = {
  showUnderline: false,
};
