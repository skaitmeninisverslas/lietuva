import styled from "styled-components";

import { pxToRem } from "../../styles/pxToRem";
import { breakpoint } from "../../styles/breakpoints";
import { expand } from "../../styles/animations";

export const Title = styled.h2`
  position: relative;
  @media ${breakpoint.lgMin} {
    margin-left: ${pxToRem(208)};
    font-size: ${pxToRem(24)};
  }
`;

export const MobileMenu = styled.div`
  width: ${pxToRem(40)};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background: #f9f9f9;
  z-index: 100;
  border-top-right-radius: ${pxToRem(20)};
  border-bottom-right-radius: ${pxToRem(20)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 7;

  svg {
    color: #000;
    margin: 0 auto;
    font-size: ${pxToRem(29)};
    &:hover {
      animation: ${expand} 0.3s forwards;
      cursor: pointer;
    }
  }

  @media ${breakpoint.smMin} {
    width: ${pxToRem(70)};
  }

  @media ${breakpoint.lgMin} {
    display: none;
  }
`;
