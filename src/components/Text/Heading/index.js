import PropTypes from 'prop-types';
import { StyledHeading } from './style';
import { HR } from '../HR.style';

// This component takes in a boolean value for showUnderline
// If showUnderline is true, an underline will display
export const Heading = ({ children, showUnderline }) => {
  return (
    <>
      <StyledHeading>{children}</StyledHeading>
      {showUnderline && <HR />}
    </>
  );
};

// Set prop types
Heading.propTypes = {
  children: PropTypes.node.isRequired,
  showUnderline: PropTypes.bool,
};
// Set default props
Heading.defaultProps = {
  showUnderline: false,
};
