import { useState } from "react";
import * as s from "./styled";
import { useNavigate } from "react-router-dom";
import { HomeIcon, UserIcon } from "../../assets";

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
            width="30"
            height="30"
            fill="#7010d2"
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
        onMouseLeave={() => setOpenMenuLateral(false)}
      >
        <p id="close" onClick={() => setOpenMenuLateral(false)}>
          X
        </p>

        <s.LinksMenuLateralContainer>
          <p>Lançamentos</p>
          <p>Ação</p>
          <p>Comédia</p>
          <p>Drama</p>
          <p>Terror</p>
          <p>Família</p>
        </s.LinksMenuLateralContainer>
      </s.MenuLateral>
    </>
  );
}
