import React, { useContext } from 'react';
import { ProductContextProvider } from '../../context/ProductContext';
import Header from '../Header/Header';
import { LayoutWrapper } from './styles';

const Layout = ({ children }) => {

  return (
    <ProductContextProvider>
      <LayoutWrapper>
        <Header />
        <main>{children}</main>
      </LayoutWrapper>
    </ProductContextProvider>
  );
};

export { Layout };
