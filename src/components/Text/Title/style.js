import styled from 'styled-components';
import { font } from '../../../styles/Theme';

export const StyledTitle = styled.h1`
  ${font.title};
  font-size: 28px;
  margin: 1rem 0 0 0;
`;

export const HR = styled.hr`
  border: solid 2px ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  width: 50px;
  margin: 1rem 0;
`;
