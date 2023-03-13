import styled from 'styled-components';

import { StyledText } from '../../components/Text/Text/style';

export const FormContainer = styled.section`
  display: flex;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.sizes.sm}) {
    flex-direction: column-reverse;
    gap: 0;
  }

  & ${StyledText} {
    flex-shrink: 2;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 1rem 0;
`;
