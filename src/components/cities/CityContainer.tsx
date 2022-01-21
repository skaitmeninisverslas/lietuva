import React, { useState } from "react";

import { BiMenuAltLeft } from "react-icons/bi";
import { GrClose, GrLocation } from "react-icons/gr";
import { RiSnowyLine } from "react-icons/ri";

import { StyledContent } from "../../styles/shared";
import { pxToRem } from "../../styles/pxToRem";
import { cityData } from "./cityData";

import { MobileMenu, Title } from "./styles";

import NavMenu from "../navigation/navigation";
import Sidebar from "../sidebar/sidebar";
import Restaurants from "../restaurants/Restaurants";
import Gallery from "../gallery/gallery";

const CityContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState("gallery");

  const cityName = global.window && window.location.pathname.slice(1);
  const cityDetails = cityData.find((i) => i.id === cityName);
  const hasRestaurants = cityData.find(
    (item) => item.id === cityName && item.restaurants
  );

  const pages = () => {
    switch (page) {
      case "gallery":
        return <Gallery cityDetails={cityDetails} />;
      case "restaurants":
        return hasRestaurants ? (
          <Restaurants cityDetails={cityDetails} />
        ) : (
          <Gallery cityDetails={cityDetails} />
        );

      default:
        return <Gallery cityDetails={cityDetails} />;
    }
  };

  return (
    <StyledContent>
      <NavMenu isCityContainer />

      <MobileMenu
        style={{
          boxShadow: isOpen
            ? `0px 0px ${pxToRem(10)} 0px rgb(0 0 0 / 6%)`
            : "none",
        }}
      >
        {!isOpen ? (
          <BiMenuAltLeft onClick={() => setIsOpen(true)} />
        ) : (
          <GrClose onClick={() => setIsOpen(false)} />
        )}
      </MobileMenu>

      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setPage={setPage}
        hasRestaurants={hasRestaurants}
      />

      <Title>
        <GrLocation /> {cityDetails && cityDetails.name}
        <RiSnowyLine style={{ position: "absolute", right: 0 }} />
      </Title>

      {pages()}
    </StyledContent>
  );
};

export default CityContainer;
