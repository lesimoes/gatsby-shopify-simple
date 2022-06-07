import React from "react"
import { ImageGalleryWrapper } from "./style"

export function ImageGallery({ images }) {

  return (
    <ImageGalleryWrapper>
      { images.map(image => (
        <img src={image.featuredImage.originalSrc} key={image.id}/>
      ))}
    </ImageGalleryWrapper>
  )
}


