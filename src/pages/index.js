import React from 'react';
import { Layout, SEO } from 'components';
import CollectionGallery from '../components/CollectionGallery/CollectionGallery';

export default function IndexPage ({ data }) {
  
  return (
    <Layout>
      <SEO title="Home" />
      <CollectionGallery />
    </Layout>
  )
}



