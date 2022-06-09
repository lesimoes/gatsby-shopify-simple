import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
query MyQuery {
  allShopifyProduct {
    edges {
      node {
        handle
        description
        featuredImage {
          originalSrc
        }
      }
    }
  }
  allShopifyCollection {
    nodes {
      description
      handle
      shopifyId
      title
      productsCount
      image {
        originalSrc
      }
    }
  }
}
`
const defaultState = {
  products: [],
  collections: [],
};

const ProductContext = React.createContext(defaultState);
export default ProductContext;

export function ProductContextProvider({ children }) {
  const { allShopifyCollection, allShopifyProduct } = useStaticQuery(query);

  return (
    <ProductContext.Provider
      value={{
        products: allShopifyProduct.edges.map(({node}) => node),
        collections: allShopifyCollection.nodes.map(value => value),
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
