import { Link } from 'gatsby';
import React, { useContext } from 'react';
import ProductContext from '../../context/ProductContext';
import { CollectionWrapper } from './styles';

export default function CollectionGallery () {

    const { collections } = useContext(ProductContext);

    return (
        <CollectionWrapper>
            { collections.map(({title, shopifyId, image, handle}) => (
                <div>
                    <Link to={`/collections/${handle}`}>
                        <img src={image.originalSrc} alt={title} key={shopifyId}/>
                        <h5>{title}</h5>
                    </Link>
                </div>
                
            )) }
        </CollectionWrapper>
    )
}