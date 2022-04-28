import React from "react";
import type { NextPage } from "next";
import Script from "next/script";
import { FaInfoCircle } from "react-icons/fa";

import NavMenu from "../components/navigation/navigation";
import HomepageSelector from "../components/homepage/HomepageSelector";
import {
  RestyledContent,
  StyledBackground,
  StyledBanner,
  StyledNote,
  StyledTitle,
} from "../styles/homepage";
import Footer from "../components/footer/footer";

const Lithuania: NextPage = () => {
  return (
    <RestyledContent>
      <Script type="text/javascript" src="map/mapdata.js"></Script>
      <Script type="text/javascript" src="map/countrymap.js"></Script>

      <NavMenu isHomeContainer />
      <StyledBanner>
        <StyledTitle>Pažintis su Lietuva - viskas vienoje vietoje</StyledTitle>
        <StyledBackground src="assets/images/background.svg" alt="" />
      </StyledBanner>
      <HomepageSelector />
      <StyledNote>
        <FaInfoCircle /> Norėdami pamatyti daugiau vietovių paspauskite
        apskritį.
      </StyledNote>
      <div id="map"></div>
      <Footer />
    </RestyledContent>
  );
};

export default Lithuania;
