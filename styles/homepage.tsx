import styled from "styled-components";

import { StyledContent } from "./shared";
import { pxToRem } from "./pxToRem";
import { breakpoint } from "./breakpoints";

export const StyledBackground = styled.img`
  display: block;
  width: 50%;
  margin: 0 auto;
  height: 100%;
  @media ${breakpoint.lgMin} {
    width: auto;
  }
`;

export const StyledBanner = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${pxToRem(40)};

  @media ${breakpoint.lgMin} {
    height: ${pxToRem(300)};
    margin: ${pxToRem(20)} 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledTitle = styled.h1`
  color: #0000bb;
  margin-top: 0;
  text-align: center;
  margin-bottom: ${pxToRem(40)};
  @media ${breakpoint.lgMin} {
    max-width: calc(((100% / 2) - ${pxToRem(56)}));
    text-align: left;
  }
`;

export const RestyledContent = styled(StyledContent)`
  padding: 0;
  @media ${breakpoint.lgMin} {
    padding-left: ${pxToRem(48)};
    padding-right: ${pxToRem(48)};
  }
  @media ${breakpoint.xxlMin} {
    max-width: ${pxToRem(1360)};
    padding-left: 0;
    padding-right: 0;
    margin: 0 auto;
  }
  .active {
    left: 0;
  }
`;
