import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledCard = styled(motion.article)`
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  
  padding: 1rem;
  margin: 0.75rem 0;
  width: 49%;
  
  @media (max-width: ${({ theme }) => theme.sizes.sm}) {
    width: 100%;
  }
  
  h3 {
    margin-right: 2rem;
  }
  
  transition: all 0.5s ease-in-out;
  box-shadow: ${({ theme }) => theme.shadows.small};
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.smallHover};
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 1.95rem;
  right: 1rem;

  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  cursor: pointer;

  /* correctly colour the button when hovered over */
  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
    #x-fill {
      display: block;
    }
    #x-outline {
      display: none;
    }
  }

  #x-outline {
    display: block;
  }
  #x-fill {
    display: none;
  }
`;
