import styled from "styled-components";

import { pxToRem } from "../../styles/pxToRem";
import { breakpoint } from "../../styles/breakpoints";
import { grow } from "../../styles/animations";

export const StyledSidebar = styled.div`
  background: #f1f3f4;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 6;
  left: 0;
  padding-left: ${pxToRem(40)};
  animation: ${grow} 0.7s forwards;

  &.open {
    @media ${breakpoint.mdMax} {
      display: flex;
    }
  }

  &.closed {
    @media ${breakpoint.mdMax} {
      display: none;
    }
  }

  @media ${breakpoint.lgMin} {
    left: auto;
    animation: none;
    width: ${pxToRem(160)};
    padding-left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: ${pxToRem(20)};
    top: ${pxToRem(20)};
    bottom: ${pxToRem(20)};
  }
`;

export const SidebarMenu = styled.ul`
  list-style-type: none;
  text-align: center;
  padding: 0;
  width: 100%;

  li {
    margin: ${pxToRem(20)} auto;
    @media ${breakpoint.lgMin} {
      display: block;
      cursor: pointer;
      padding-top: ${pxToRem(16)};
      width: 70%;
      border-bottom: 1px solid #000;
      margin: 0 auto;
      &:last-child {
        border-bottom: none;
      }
    }

    svg {
      fill: #0000bb;
      font-size: ${pxToRem(29)};
      path {
        stroke: #0000bb;
      }
    }
    p {
      font-weight: bold;
      margin-top: 0;
    }
  }
`;

export const SidebarItem = styled.div`
  &.inactive {
    cursor: initial;
    opacity: 0.5;
  }

  @media ${breakpoint.lgMin} {
    &:hover {
      opacity: 0.5;
    }
  }
`;
