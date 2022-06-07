import React, { useContext } from 'react';
import { HeaderWrapper } from './styles';
import ProductContext from '../../context/ProductContext';

export default function CollectionMenu () {

    const { collections } = useContext(ProductContext);

    return(
        <HeaderWrapper>
            { collections.map(({title, shopifyId}) => (
                <span key={shopifyId}>{title}</span>
            )) }
        </HeaderWrapper>
    )
}
