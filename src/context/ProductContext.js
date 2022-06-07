import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
query MyQuery {
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
  const { allShopifyCollection } = useStaticQuery(query);
  console.log(allShopifyCollection)
  return (
    <ProductContext.Provider
      value={{
        products: [],
        collections: allShopifyCollection.nodes.map(value => value),
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
