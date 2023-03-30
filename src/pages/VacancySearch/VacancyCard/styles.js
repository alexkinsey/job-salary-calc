import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledCard = styled(motion.article)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadows.small};
  padding: 1rem;
  margin: 1rem 0;

  transition: all 0.5s ease-in-out;
  /* show border on selected cards */
  outline: ${({ theme, selected }) => (selected ? `1px solid ${theme.colors.primary}` : 'none')};

  :hover {
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.shadows.smallHover};
  }
`;
