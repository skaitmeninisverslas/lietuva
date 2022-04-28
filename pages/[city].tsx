import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import { ReactImageGalleryItem } from "react-image-gallery";

import { BiMenuAltLeft } from "react-icons/bi";
import { GrClose, GrLocation } from "react-icons/gr";
import { MdArrowBackIosNew } from "react-icons/md";

import { StyledContent } from "../styles/shared";
import { pxToRem } from "../styles/pxToRem";
import { cityData } from "../data/cityData";

import { MobileMenu, Title } from "../styles/cities";

import NavMenu from "../components/navigation/navigation";
import Sidebar from "../components/sidebar/sidebar";
import Restaurants from "../components/restaurants/Restaurants";
import Gallery from "../components/gallery/gallery";
import Image from "next/image";
import { StyledNote } from "../styles/homepage";
import Link from "next/link";

type Props = {
  cityDetails: {
    name: string;
    images: ReactImageGalleryItem[];
    restaurants: Array<object>;
    description: string;
  };
  hasRestaurants: Array<object>;
};

const CityContainer: NextPage<Props> = ({ cityDetails, hasRestaurants }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState("gallery");
  const [weather, setWeather] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "19261e3e58158a93ed75f2724f4ed5a0";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${
        cityDetails && cityDetails.name
      }&appid=${apiKey}`;
      const apiData = await fetch(url)
        .then((res) => res.json())
        .then((data) => data);
      setWeather(apiData.weather[0]);
    };
    fetchData();
  }, [cityDetails]);

  const router = useRouter();
  const { city } = router.query;

  const { images, restaurants, description } = cityDetails;

  const pages = () => {
    switch (page) {
      case "gallery":
        return <Gallery images={images} description={description} />;
      case "restaurants":
        return hasRestaurants ? (
          <Restaurants restaurants={restaurants} />
        ) : (
          <Gallery images={images} description={description} />
        );

      default:
        return <Gallery images={images} description={description} />;
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
        <Link href="/">
          <a
            style={{
              fontSize: pxToRem(16),
              fontWeight: "normal",
              display: "flex",
              alignItems: "center",
              color: "#000",
              textDecoration: "none",
              marginBottom: pxToRem(20),
              border: `${pxToRem(1)} solid #a6a7a4`,
              width: pxToRem(127),
              borderRadius: pxToRem(8),
              padding: pxToRem(7),
            }}
          >
            <MdArrowBackIosNew
              style={{
                marginRight: pxToRem(10),
                paddingRight: pxToRem(10),
                borderRight: `${pxToRem(1)} solid #a6a7a4`,
              }}
            />{" "}
            Į pagrindinį
          </a>
        </Link>
        <GrLocation /> {cityDetails && cityDetails.name}
        <div className="icon">
          <Image
            src={`http://openweathermap.org/img/wn/${
              weather && weather["icon"]
            }.png`}
            alt={weather && weather["description"]}
            layout="fill"
          />
        </div>
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
