import styled from 'styled-components';

const StyledBurger = styled.div`
  display: none;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 1001;

  width: 2rem;
  height: 2rem;

  /* show burger icon at size */
  @media (max-width: 626px) {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    cursor: pointer;
  }

  /* create shape of burger icon and animate */
  div {
    width: 2rem;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ isOpen }) => (isOpen ? 'translateY(-1rem) rotate(45deg)' : 'translateY(0%) rotate(0)')};
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const Burger = ({ isOpen, setIsOpen }) => {
  return (
    <StyledBurger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
