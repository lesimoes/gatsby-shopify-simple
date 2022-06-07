import { Link } from "gatsby"
import React from "react"
import { ImageGalleryWrapper } from "./style"

export function ImageGallery({ images, linkPath }) {

  return (
    <ImageGalleryWrapper>
      { images.map(image => (
        <Link to={`/${linkPath}/${image.handle}`} key={image.id}>
            <img src={image.featuredImage.originalSrc} />
        </Link>
      ))}
    </ImageGalleryWrapper>
  )
}


