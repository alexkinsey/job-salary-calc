import styled from 'styled-components';

const StyledBurger = styled.div`
  display: none;
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
    height: 3px;
    background: white;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    /* rotate the lines and fade out the centre line */
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateY(-10px) rotate(45deg)' : 'translateY(0%) rotate(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
