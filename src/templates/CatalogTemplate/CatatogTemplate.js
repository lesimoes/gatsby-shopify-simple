import React from "react"
import { graphql } from "gatsby"
import { ImageGallery, Layout, SEO } from "../../components"
import { CatalogWrapper } from "./styles"

export default function CatalogTemplate({ data }) {


  return (
      <Layout>
        <SEO title="Categorias" description={data.shopifyCollection.handle}/>
        <CatalogWrapper>
          <ImageGallery 
            products={data.shopifyCollection.products}
            linkPath='products'
            />
        </CatalogWrapper>   
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
        title
        priceRangeV2 {
          minVariantPrice {
            amount
          }
        }
        featuredImage {
          originalSrc
        }
      }
    }
  }
`
