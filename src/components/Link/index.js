import PropTypes from 'prop-types';

// ICONS
import { FiExternalLink } from 'react-icons/fi';

// STYLES
import { LinkContainer, LinkText } from './style';

// This components takes in a location which should be a URL and a boolean value for isExternal
// If isExternal is true, an icon will display and the link will open in a new tab
export const Link = ({ children, location, isExternal, ...props }) => {
  return (
    <>
      {isExternal ? (
        <LinkContainer href={location} target="_blank" rel="noreferrer" {...props}>
          <FiExternalLink style={{ fontSize: '18px' }} />
          <LinkText> {children}</LinkText>
        </LinkContainer>
      ) : (
        <LinkContainer href={location} {...props}>
          <LinkText>{children}</LinkText>
        </LinkContainer>
      )}
    </>
  );
};

// Set prop types
Link.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.string.isRequired,
  isExternal: PropTypes.bool,
};
// Set default props
Link.defaultProps = {
  isExternal: false,
};
