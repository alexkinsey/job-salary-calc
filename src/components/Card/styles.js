import styled from 'styled-components';

export const StyledCard = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin: 0.75rem 0;
  width: 49%;

  @media (max-width: ${({ theme }) => theme.sizes.sm}) {
    width: 100%;
  }

  h3 {
    margin-right: 2rem;
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 1.95rem;
  right: 1rem;

  color: red;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
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
