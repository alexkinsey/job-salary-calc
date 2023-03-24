import styled from 'styled-components';
import { Button } from '../../components/Button';

export const SearchBar = styled.form`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const ClearButton = styled(Button)`
  border: none;
  position: absolute;
  right: 90px;
  top: 4px;

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

