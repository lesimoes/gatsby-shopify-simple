import React, { useContext } from 'react';
import { HeaderWrapper } from './styles';
import ProductContext from '../../context/ProductContext';
import { Link } from 'gatsby';

export default function CollectionMenu () {

    const { collections } = useContext(ProductContext);

    return(
        <HeaderWrapper>
            { collections.map(({title, shopifyId, handle}) => (
                <Link to={`/collections/${handle}`}>
                     <span key={shopifyId}>{title}</span>
                </Link>
               
            )) }
        </HeaderWrapper>
    )
}
