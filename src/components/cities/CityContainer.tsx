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

interface cityTypes {
  name: string;
  isDesktop: boolean;
}

const CityContainer = ({ name, isDesktop }: cityTypes) => {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState("gallery");

  const cityDetails = cityData.find((i) => i.id === name);
  const hasRestaurants = cityData.find(
    (item) => item.id === name && item.restaurants
  );

  const pages = () => {
    switch (page) {
      case "gallery":
        return <Gallery cityDetails={cityDetails} isDesktop={isDesktop} />;
      case "restaurants":
        return hasRestaurants ? (
          <Restaurants
            marginSize={
              isDesktop
                ? `${pxToRem(20)} 0 ${pxToRem(20)} ${pxToRem(208)}`
                : `${pxToRem(20)} 0`
            }
            cityDetails={cityDetails}
          />
        ) : (
          <Gallery cityDetails={cityDetails} isDesktop={isDesktop} />
        );

      default:
        return <Gallery cityDetails={cityDetails} isDesktop={isDesktop} />;
    }
  };

  return (
    <StyledContent>
      <NavMenu
        isCityContainer
        isDesktop={isDesktop}
        marginSize={
          isDesktop
            ? `${pxToRem(20)} 0 ${pxToRem(20)} ${pxToRem(208)}`
            : `${pxToRem(20)} 0`
        }
      />

      {!isDesktop && (
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
      )}

      <Sidebar
        isDesktop={isDesktop}
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
