import { StyledHeading } from './style';

export const Heading = ({ children, ...props }) => {
  return (
    <StyledHeading>
      {children} 
      {props.showUnderline && <hr />}
    </StyledHeading>
  );
};
