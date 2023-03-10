import styled from 'styled-components';
import { font } from '../../../styles/Theme';

export const StyledText = styled.p`
  ${font.normal}
  color: ${({ theme }) => theme.colors.textGrey};
  margin: 1rem 0;
`;
