import styled from "styled-components";

export const Navbar = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  z-index: 2;
  transition: background-color 0.5s ease-out, opacity 0.5s ease-out;
  ${({ navbarColor }) =>
    navbarColor ? `background: #000;` : `background: transparent;`};
  ${({ openMenuLateral }) => (openMenuLateral ? `opacity: 0` : `opacity: 1;`)};
`;

export const LinksNavbarContainer = styled.div`
  width: 100%;
  margin: 0px auto;
  display: flex;
  align-items: center;
  padding: 0px 30px;
  justify-content: space-between;

  svg {
    cursor: pointer;
  }

  img {
    cursor: pointer;
    width: 45px;
  }

  svg:hover {
    fill: #c3c3c3;
  }
`;

export const MenuLateral = styled.div`
  position: fixed;
  width: 50%;
  padding: 138px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 80px;
  transition: ${({ openMenuLateral }) =>
    openMenuLateral ? `transform 0.5s ease-out;` : `transform 0.5s ease-in;`};
  ${({ openMenuLateral }) =>
    openMenuLateral
      ? `transform: translate(0); opacity: 1;`
      : `transform: translate(-400%);`}
  height: 100%;
  background: #000;
  text-align: center;
  z-index: 2;

  img {
    cursor: pointer;
    margin: 0 auto;
    width: 42px;
  }

  p {
    font-size: 2.7rem;
    font-weight: bold;
    color: #999;
    cursor: pointer;
  }

  p:hover {
    color: #c3c3c3;
  }

  @media (max-width: 1440px) {
    padding: 50px;

    p {
      font-size: 2rem;
      color: #c3c3c3;
    }
  }

  @media (max-width: 450px) {
    width: 80%;

    p {
      font-size: 1.3rem;
    }
  }
`;

export const IconContainer = styled.div`
  /* max-width: 30%; */
  width: 20vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  @media (max-width: 1440px) {
    p {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 1024px) {
    p {
      color: #c3c3c3;
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;

    p {
      font-size: 1.6rem;
    }
  }
`;

export const LinksMenuLateralContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* gap: 50px; */
`;
