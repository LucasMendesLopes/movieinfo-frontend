import styled from "styled-components";

export const Navbar = styled.div`
  position: fixed;
  width: 100%;
  height: 70px;
  display: flex;
  z-index: 10;
  transition: background-color 0.3s ease-out, opacity 0.5s ease-out;
  ${({ navbarColor }) =>
    navbarColor
      ? `background: rgba(30, 30, 30, 1);`
      : `background: transparent;`};
  ${({ openMenuLateral }) =>
    openMenuLateral ? `display: none` : `opacity: 1;`};

  p {
    font-weight: bold;
    cursor: pointer;
  }

  svg {
    cursor: pointer;
  }

  img {
    cursor: pointer;
    width: 45px;
    height: 45px;
  }

  /* @media (max-width: 450px) {
    background: #010101;
  } */
`;

export const LinksNavbarContainer = styled.div`
  width: 100%;
  margin: 0px auto;
  display: flex;
  align-items: center;
  padding: 0px 30px;
  justify-content: space-between;
`;

export const MenuLateral = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 30px;
  justify-content: space-around;
  /* gap: 30px; */
  opacity: 0;
  transition: all 0.5s;
  z-index: 2;
  ${({ openMenuLateral }) =>
    openMenuLateral ? `opacity: 1;  width: 50%;` : `width: 0;`}
  height: 100%;
  background: rgba(30, 30, 30, 1);
  text-align: center;

  p#close {
    margin: 0 auto;
  }

  p {
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
  }

  @media (max-width: 450px) {
    padding: 20px;

    p {
      font-size: 1.3rem;
    }
  }
`;

export const LinksMenuLateralContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
