import React from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { isMobile } from "react-device-detect";

import { StyledGallery, StyledImg, StyledModule } from "./styles";
import { Title } from "../../styles/cities";

type galleryTypes = {
  images: ReactImageGalleryItem[];
  description: string;
};

const Gallery = ({ images, description }: galleryTypes) => {
  return (
    <StyledGallery>
      <div
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />

      <Title style={{ marginLeft: 0 }}>Galerija</Title>

      {images && !isMobile ? (
        <>
          <StyledModule>
            <ImageGallery items={images} />
          </StyledModule>
          {images.map((item: any, key: number) => (
            <StyledImg src={item.original} alt={item.name} key={key} />
          ))}
        </>
      ) : images && isMobile ? (
        images.map((item: any, key: number) => (
          <StyledImg src={item.original} alt={item.name} key={key} />
        ))
      ) : null}
    </StyledGallery>
  );
};

export default Gallery;
