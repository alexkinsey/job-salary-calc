import PropTypes from 'prop-types';
import { FiExternalLink } from 'react-icons/fi';
import { LinkContainer, LinkText } from './style';

// This components takes in a location which should be a URL and a boolean value for isExternal
// If isExternal is true, an icon will display and the link will open in a new tab
export const Link = ({ children, location, isExternal }) => {
  return (
    <>
      {isExternal ? (
        <LinkContainer href={location} target="_blank" rel="noreferrer">
          <FiExternalLink style={{fontSize: '20px'}} />
          <LinkText> {children}</LinkText>
        </LinkContainer>
      ) : (
        <LinkContainer href={location}>
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