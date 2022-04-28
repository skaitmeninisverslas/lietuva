import React from "react";
import { pxToRem } from "../../styles/pxToRem";
import { StyledMenu } from "../navigation/styles";
import { StyledFooter } from "./styles";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <StyledMenu style={{ margin: pxToRem(20) }}>
      <StyledFooter>{`${currentYear} © Visos teisės saugomos`}</StyledFooter>
    </StyledMenu>
  );
}
