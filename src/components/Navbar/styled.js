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
  width: 30%;
  height: 100%;
  padding: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 50px;

  transition: ${({ openMenuLateral }) =>
    openMenuLateral ? `transform 0.5s ease-out;` : `transform 0.5s ease-in;`};
  ${({ openMenuLateral }) =>
    openMenuLateral
      ? `transform: translate(0); opacity: 1;`
      : `transform: translate(-400%);`}

  background: #000;
  text-align: center;
  z-index: 2;

  img {
    cursor: pointer;
    width: 42px;
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style: none;
    gap: 35px;
    text-align: left;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: #7010d2 #430980;

    ::-webkit-scrollbar {
      width: 12px;
    }

    ::-webkit-scrollbar-track {
      background: #7010d2;
      border-radius: 20px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #430980;
      border-radius: 20px;
    }
  }

  li {
    font-size: 2.7rem;
    font-weight: bold;
    color: #999;
    cursor: pointer;
  }

  li:hover {
    color: #c3c3c3;
  }

  @media (max-width: 1440px) {
    padding: 50px;

    li {
      font-size: 2.2rem;
    }
  }

  @media (max-width: 1024px) {
    padding: 40px;

    li {
      font-size: 1.6rem;
      color: #c3c3c3;
    }
  }

  @media (max-width: 450px) {
    width: 65%;

    li {
      font-size: 1.2rem;
    }
  }
`;
