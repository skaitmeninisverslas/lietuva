import React from "react";
import type { NextPage } from "next";
import Script from "next/script";

import NavMenu from "../components/navigation/navigation";
import HomepageSelector from "../components/homepage/HomepageSelector";
import {
  RestyledContent,
  StyledBackground,
  StyledBanner,
  StyledTitle,
} from "../styles/homepage";

const Lithuania: NextPage = () => {
  return (
    <RestyledContent>
      <Script type="text/javascript" src="map/mapdata.js"></Script>
      <Script type="text/javascript" src="map/countrymap.js"></Script>

      <NavMenu isHomeContainer />
      <StyledBanner>
        <StyledTitle>Pažink namus - virtuali kelionė po Lietuvą</StyledTitle>
        <StyledBackground src="assets/images/background.svg" alt="" />
      </StyledBanner>
      <HomepageSelector />
      <div id="map"></div>
    </RestyledContent>
  );
};

export default Lithuania;
