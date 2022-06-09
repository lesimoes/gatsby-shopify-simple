import { Link } from "gatsby"
import React from "react"
import { ImageGalleryWrapper } from "./style"

//TODO - should be ProductGallery 
export function ImageGallery({ products = [], linkPath }) {

  return (
    <ImageGalleryWrapper>
      { products.map(product => (
        <Link to={`/${linkPath}/${product.handle}`} key={product.id}>
          <div>
            <img src={product.featuredImage.originalSrc} />
            <span>{product.title}</span>
          </div>

        </Link>
      ))}
    </ImageGalleryWrapper>
  )
}


