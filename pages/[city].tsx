import React, { useState } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import { ReactImageGalleryItem } from "react-image-gallery";

import { BiMenuAltLeft } from "react-icons/bi";
import { GrClose, GrLocation } from "react-icons/gr";
import { RiSnowyLine } from "react-icons/ri";

import { StyledContent } from "../styles/shared";
import { pxToRem } from "../styles/pxToRem";
import { cityData } from "../data/cityData";

import { MobileMenu, Title } from "../styles/cities";

import NavMenu from "../components/navigation/navigation";
import Sidebar from "../components/sidebar/sidebar";
import Restaurants from "../components/restaurants/Restaurants";
import Gallery from "../components/gallery/gallery";

type Props = {
  cityDetails: {
    name: string;
    images: ReactImageGalleryItem[];
    restaurants: Array<object>;
  };
  hasRestaurants: Array<object>;
};

const CityContainer: NextPage<Props> = ({ cityDetails, hasRestaurants }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState("gallery");

  const router = useRouter();
  const { city } = router.query;

  const { images, restaurants } = cityDetails;

  const pages = () => {
    switch (page) {
      case "gallery":
        return <Gallery images={images} />;
      case "restaurants":
        return hasRestaurants ? (
          <Restaurants restaurants={restaurants} />
        ) : (
          <Gallery images={images} />
        );

      default:
        return <Gallery images={images} />;
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

export async function getServerSideProps(context: any) {
  // Fetch data from external API
  const { city } = context.params;
  const cityDetails = cityData.find((i) => i.id === city);

  const hasRestaurants = cityData.find(
    (item) => item.id.toString() === city && item.restaurants
  );

  // Pass data to the page via props
  return { props: { cityDetails, hasRestaurants } };
}

export default CityContainer;
