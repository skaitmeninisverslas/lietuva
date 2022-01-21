import React, { useState } from "react";
import { ImMenu3 } from "react-icons/im";
import { GrClose } from "react-icons/gr";

import { StyledMenu } from "./styles";

interface navProps {
  isCityContainer?: boolean;
  isHomeContainer?: boolean;
}

const NavMenu = ({ isCityContainer, isHomeContainer }: navProps) => {
  const [isActive, setisActive] = useState(false);

  return (
    <StyledMenu
      className={`
        ${isActive ? "active" : ""} 
        ${isHomeContainer ? "home-container" : ""} 
        ${isCityContainer ? "city-container" : ""}
      `}
    >
      {!isActive ? (
        <ImMenu3 className="menu-icon" onClick={() => setisActive(true)} />
      ) : (
        <GrClose className="menu-icon" onClick={() => setisActive(false)} />
      )}
      <ul className={isActive ? "active" : ""}>
        <li>
          <p style={{ letterSpacing: "0.555px" }}>Apie projektą</p>
        </li>
        <li>
          <p className="animated" style={{ letterSpacing: "0.732px" }}>
            Paremk
          </p>
        </li>
        <li>
          <p style={{ letterSpacing: "0.685px" }}>Blog'as</p>
        </li>
        <li>
          <p style={{ letterSpacing: "0.721px" }}>Kontaktai</p>
        </li>
      </ul>
    </StyledMenu>
  );
};

export default NavMenu;
