import styled from 'styled-components';

import { StyledText } from '../../components/Text/Text/style';

export const FormContainer = styled.section`
  display: flex;
  gap: 30px;

  @media (max-width: ${({ theme }) => theme.sizes.sm}) {
    flex-direction: column-reverse;
    gap: 0px;
  }

  & ${StyledText} {
    flex-shrink: 2;
  }
`;

export const CardContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 1rem 0;
`;
