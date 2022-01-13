import React from "react";
import { BiRestaurant, BiHotel, BiShoppingBag } from "react-icons/bi";
import { GrGallery } from "react-icons/gr";
import { RiRouteLine } from "react-icons/ri";

import { StyledSidebar, SidebarMenu, SidebarItem } from "./styles";

type sidebarTypes = {
  isDesktop: boolean;
  isOpen: boolean;
  setIsOpen: (setIsOpen: boolean) => void;
  setPage: (setPage: string) => void;
  hasRestaurants: any;
};

const Sidebar = ({
  isDesktop,
  isOpen,
  setIsOpen,
  setPage,
  hasRestaurants,
}: sidebarTypes) => {
  return (
    <StyledSidebar
      style={{
        display: isDesktop ? "flex" : isOpen ? "flex" : "none",
      }}
      onClick={() => setIsOpen(false)}
    >
      <SidebarMenu>
        <li onClick={() => setPage("gallery")}>
          <SidebarItem>
            <GrGallery />
            <p>Galerija</p>
          </SidebarItem>
        </li>
        <li>
          <SidebarItem className="inactive">
            <RiRouteLine />
            <p>Maršrutai</p>
          </SidebarItem>
        </li>
        <li
          onClick={() => setPage("restaurants")}
          className={hasRestaurants ? "" : "inactive"}
        >
          <SidebarItem>
            <BiRestaurant />
            <p>Kur užkąsti?</p>
          </SidebarItem>
        </li>
        <li>
          <SidebarItem className="inactive">
            <BiHotel />
            <p>Kur pernakvoti?</p>
          </SidebarItem>
        </li>
        <li>
          <SidebarItem className="inactive">
            <BiShoppingBag />
            <p>Kur apsipirkti?</p>
          </SidebarItem>
        </li>
      </SidebarMenu>
    </StyledSidebar>
  );
};

export default Sidebar;
