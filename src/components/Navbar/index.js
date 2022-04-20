import { useState } from "react";
import * as s from "./styled";
import { useNavigate } from "react-router-dom";
import { CloseIcon, HomeIcon, UserIcon } from "../../assets";

export function Navbar({ navbarColor }) {
  const [openMenuLateral, setOpenMenuLateral] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <s.Navbar navbarColor={navbarColor} openMenuLateral={openMenuLateral}>
        <s.LinksNavbarContainer>
          <svg
            onClick={() => setOpenMenuLateral(true)}
            viewBox="0 0 100 80"
            width="35"
            height="35"
            fill="#999"
          >
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>

          <img
            className="icon"
            src={HomeIcon}
            alt="ícone página inicial"
            onClick={() => navigate("/")}
          />

          <img
            className="icon"
            src={UserIcon}
            alt="ícone login"
            onClick={() => navigate("/login")}
          />
        </s.LinksNavbarContainer>
      </s.Navbar>

      <s.MenuLateral
        openMenuLateral={openMenuLateral}
        // onMouseLeave={() => setOpenMenuLateral(false)}
      >
        <img
          src={CloseIcon}
          alt="fechar menu lateral"
          onClick={() => setOpenMenuLateral(false)}
        />

        <ul>
          <li>Ação</li>
          <li>Aventura</li>
          <li>Animação</li>
          <li>Comédia</li>
          <li>Crime</li>
          <li>Documentário</li>
          <li>Drama</li>
          <li>Família</li>
          <li>Fantasia</li>
          <li>Horror</li>
          <li>Lançamentos</li>
          <li>Música</li>
          <li>Mistério</li>
          <li>Romance</li>
          <li>Ficção científica</li>
          <li>Thriller</li>
          <li>Guerra</li>
        </ul>
      </s.MenuLateral>
    </>
  );
}
