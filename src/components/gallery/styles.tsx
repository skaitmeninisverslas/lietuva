import styled from "styled-components";

import { pxToRem } from "../../styles/pxToRem";
import { breakpoint } from "../../styles/breakpoints";

export const StyledGallery = styled.div`
  margin-bottom: ${pxToRem(20)};
  @media ${breakpoint.lgMin} {
    margin-left: ${pxToRem(208)};
  }
`;

export const StyledImg = styled.img`
  display: block;
  width: 100%;
  margin-top: ${pxToRem(20)};
  border-radius: ${pxToRem(5)};
`;
