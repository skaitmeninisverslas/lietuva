import React, { useState } from "react";
import { ImMenu3 } from "react-icons/im";
import { GrClose } from "react-icons/gr";

import { StyledMenu } from "./styles";
import { pxToRem } from "../../styles/pxToRem";

interface navProps {
  leftPosition?: number;
  marginSize?: string;
  isDesktop: boolean;
  isCityContainer?: boolean;
  isHomeContainer?: boolean;
}

const NavMenu = ({
  leftPosition,
  marginSize,
  isDesktop,
  isCityContainer,
  isHomeContainer,
}: navProps) => {
  const [isActive, setisActive] = useState(false);

  return (
    <StyledMenu
      style={{
        margin: marginSize && marginSize,
        marginRight:
          isActive && isCityContainer
            ? pxToRem(20)
            : isHomeContainer && !isDesktop
            ? pxToRem(20)
            : 0,
        left: leftPosition && leftPosition,
      }}
      className={!isDesktop && isActive ? "active" : ""}
    >
      {!isDesktop &&
        (!isActive ? (
          <ImMenu3 onClick={() => setisActive(true)} />
        ) : (
          <GrClose onClick={() => setisActive(false)} />
        ))}
      <ul
        style={{
          display: isDesktop ? "flex" : isActive ? "flex" : "none",
        }}
      >
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
