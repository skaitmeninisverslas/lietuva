import React from "react";
import styled from "styled-components";

import { GrLocation, GrLink } from "react-icons/gr";
import { BiTime } from "react-icons/bi";
import { pxToRem } from "../../styles/pxToRem";

type restaurantData = {
  cityDetails: any;
};

const Restaurants = ({ cityDetails }: restaurantData) => {
  return (
    <div style={{ marginLeft: pxToRem(208) }}>
      <ul style={{ padding: 0 }}>
        {cityDetails.restaurants.map(({ rest }: any) => (
          <StyledList>
            <div
              style={{
                fontWeight: "bold",
                marginBottom: pxToRem(10),
                color: "#0000bb",
              }}
            >
              {rest.title}
            </div>
            <span>
              <GrLocation /> {rest.address}
            </span>
            <a
              style={{ textDecoration: "none", color: "#000" }}
              href={rest.link}
            >
              <GrLink
                style={{ marginRight: pxToRem(5), fontSize: pxToRem(20) }}
              />
              {rest.link}
            </a>
            <span style={{ display: "flex" }}>
              <BiTime />
              <p
                style={{ margin: `0 0 0 ${pxToRem(5)}` }}
                dangerouslySetInnerHTML={{ __html: rest.working }}
              />
            </span>
          </StyledList>
        ))}
      </ul>
    </div>
  );
};

export default Restaurants;

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #f1f3f4;
  width: calc(((100% / 2) - ${pxToRem(40)}));
  padding: ${pxToRem(20)};
  border-radius: ${pxToRem(8)};
  &:hover {
    background: #f1f3f4;
  }
`;
