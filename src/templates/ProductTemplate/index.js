import { graphql } from 'gatsby';
import * as React from 'react';

export default function ProductTemplate ({ pageContext: data }) {
    return (
        <h1>Product - { data.product.title }</h1>
    )
}

export const query = graphql`
    query ProductQuery($shopifyId: String)
        {
            shopifyProduct(shopifyId: {eq: $shopifyId}) {
              title
              description
            }
          }
`