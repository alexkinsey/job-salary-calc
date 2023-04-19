import PropTypes from 'prop-types';

// ICONS
import { FiExternalLink, FiChevronRight } from 'react-icons/fi';

// STYLES
import { LinkContainer, LinkText } from './style';

// This components takes in a location which should be a URL and a boolean value for isExternal
// If isExternal is true, an icon will display and the link will open in a new tab
// If inline is true, the link will not have a right arrow icon and will be inline with other elements
export const Link = ({ children, location, isExternal, inline }) => {
  return (
    <>
      {isExternal ? (
        <LinkContainer href={location} target="_blank" rel="noreferrer" inline={inline}>
          <FiExternalLink style={{ fontSize: '18px' }} />
          <LinkText> {children}</LinkText>
        </LinkContainer>
      ) : (
        <LinkContainer href={location} inline={inline}>
          <LinkText>
            {children}
            {/* Remove right arrow if inline */}
            {!inline && <FiChevronRight style={{ fontSize: '20px', verticalAlign: '-17%' }} />}
          </LinkText>
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
  inline: PropTypes.bool,
};
// Set default props
Link.defaultProps = {
  isExternal: false,
  inline: false,
};
