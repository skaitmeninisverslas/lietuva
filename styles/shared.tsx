import styled from "styled-components";

import { pxToRem } from "./pxToRem";
import { breakpoint } from "./breakpoints";

export const StyledContent = styled.div`
  padding-right: ${pxToRem(20)};
  padding-left: ${pxToRem(60)};
  @media ${breakpoint.smMin} {
    padding-left: ${pxToRem(90)};
  }

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

  #map_inner circle[class^="sm_location_"] {
    position: relative;
  }

  .image-gallery-thumbnail.active,
  .image-gallery-thumbnail:focus,
  .image-gallery-thumbnail:hover {
    border: ${pxToRem(4)} solid #0000bb;
  }

  .icon {
    position: absolute;
    right: 0;
    bottom: 0;

    width: ${pxToRem(40)};
    height: ${pxToRem(40)};
  }
`;
