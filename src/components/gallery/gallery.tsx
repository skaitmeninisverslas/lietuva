import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import { images } from "./imageData";
import { StyledGallery, StyledImg } from "./styles";
import { Title } from "../cities/styles";

type breakpointCheck = {
  isDesktop: boolean;
};

const Gallery = ({ isDesktop }: breakpointCheck) => {
  return (
    <StyledGallery>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit
          amet mi sed massa tempus pellentesque. Integer sagittis, nunc porta
          blandit scelerisque, massa tortor pulvinar nisi, eget pulvinar magna
          urna vel turpiss.
        </p>
        <p>
          In malesuada eros et venenatis egestas. Maecenas tincidunt nibh in
          risus mattis, et pulvinar neque pellentesque. Morbi pretium, orci sit
          amet elementum facilisis, nunc ex feugiat justo, in consequat sapien
          lorem quis enim. Nam ornare bibendum leo, nec porta mauris laoreet a.
          Donec consequat ante auctor, ultrices libero eget, feugiat urna. Cras
          sed iaculis nulla.
        </p>
        <p>
          Donec consectetur eleifend neque, sed bibendum massa consequat a.
          Mauris auctor elementum velit, at egestas turpis suscipit vitae.
          Maecenas dui dolor, posuere vitae lacus id, posuere convallis lacus.
        </p>
        <p>
          Morbi feugiat nulla mi, nec dapibus massa porta non. Quisque tincidunt
          erat in leo tempor, non vulputate odio euismod. Morbi eu nunc
          vehicula, fringilla leo et, vulputate mi. Etiam porta et diam ut
          bibendum.
        </p>
      </div>

      <Title style={{ marginLeft: 0 }}>Galerija</Title>

      {isDesktop ? (
        <ImageGallery items={images} />
      ) : (
        images.map((item, key) => (
          <StyledImg src={item.original} alt={item.name} key={key} />
        ))
      )}
    </StyledGallery>
  );
};

export default Gallery;
