import React, { useContext } from 'react';
import { ProductContextProvider } from '../../context/ProductContext';
import CollectionMenu from '../CollectionMenu/CollectionMenu';
import { LayoutWrapper } from './styles';

const Layout = ({ children }) => {

  return (
    <ProductContextProvider>
      <LayoutWrapper>
      <CollectionMenu />
        <main>{children}</main>
      </LayoutWrapper>
    </ProductContextProvider>
  );
};

export { Layout };
