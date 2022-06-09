import React, { useContext } from 'react';
import { ImageGallery, Layout, SEO } from '../components';
import ProductContext from '../context/ProductContext';


export default function Products () {

    const { products } = useContext(ProductContext);

    return (
        <Layout>
            <SEO title="Products" />
            <h1>Products {products.length}</h1>
            <ImageGallery 
                products={products}
                linkPath='products'
                />
        </Layout>
    )
}