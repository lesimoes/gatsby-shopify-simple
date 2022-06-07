import React from "react"
import { graphql } from "gatsby"
import { ImageGallery, Layout } from "../../components"

export default function CatalogTemplate({ data }) {

  return (
      <Layout>
          <ImageGallery images={data.shopifyCollection.products} />   
      </Layout>
  )
}

//"gid://shopify/Collection/286137745570"

export const query = graphql`
  query CollectionQuery($shopifyId: String) {
    shopifyCollection(shopifyId: { eq: $shopifyId }) {
      handle
      title
      products {
        id
        handle
        featuredImage {
          originalSrc
        }
      }
    }
  }
`
