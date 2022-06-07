import React, { useContext } from 'react';
import ProductContext from '../../context/ProductContext';
import { CollectionWrapper } from './styles';

export default function CollectionGallery () {

    const { collections } = useContext(ProductContext);

    return (
        <CollectionWrapper>
            { collections.map(({title, shopifyId, image}) => (
                <img src={image.originalSrc} alt={title} key={shopifyId}/>
            )) }
        </CollectionWrapper>
    )
}