import { graphql } from 'gatsby';
import * as React from 'react';
import { Layout, ImageGallery } from '../../components';
import { ProductWrapper } from './styles';

export default function ProductTemplate ({ data }) {

    return (
        <Layout>
            <ProductWrapper>
                <div>
                    <h1>Product - { data.shopifyProduct.title }</h1>
                </div>
                <div>
                   <img src={data.shopifyProduct.images[0].src}/>
                </div>
            </ProductWrapper>
        </Layout>
    )
}

export const query = graphql`
    query ProductQuery($shopifyId: String)
        {
            shopifyProduct(shopifyId: {eq: $shopifyId}) {
              title
              description
              images {
                src
              }
            }
        }
`