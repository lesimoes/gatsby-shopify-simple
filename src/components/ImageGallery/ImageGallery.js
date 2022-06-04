import { graphql } from "gatsby"
import React from "react"
import { ImageGalleryWrapper } from "./style"

export function ImageGallery({ images }) {
  return (
    <ImageGalleryWrapper>
      <div>
        <img src={images[0].src} />
      </div>
    </ImageGalleryWrapper>
  )
}


