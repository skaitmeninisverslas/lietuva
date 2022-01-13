import React from "react";

import NavMenu from "../navigation/navigation";
import HomepageSelector from "../homepage/HomepageSelector";
import {
  RestyledContent,
  StyledBackground,
  StyledBanner,
  StyledTitle,
} from "./styles";
import { pxToRem } from "../../styles/pxToRem";

type desktopDetection = {
  isDesktop: boolean;
};

const Lithuania = ({ isDesktop }: desktopDetection) => {
  return (
    <RestyledContent>
      <NavMenu
        isHomeContainer
        marginSize={isDesktop ? `${pxToRem(20)} 0` : `${pxToRem(20)}`}
        leftPosition={0}
        isDesktop={isDesktop}
      />
      <StyledBanner>
        <StyledTitle>Pažink namus - virtuali kelionė po Lietuvą</StyledTitle>
        <StyledBackground src="assets/images/background.svg" alt="" />
      </StyledBanner>
      <HomepageSelector />
      <div style={{ marginTop: pxToRem(60) }} id="map"></div>
    </RestyledContent>
  );
};

export default Lithuania;
