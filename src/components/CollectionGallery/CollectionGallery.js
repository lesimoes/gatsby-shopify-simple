import { Link } from 'gatsby';
import React, { useContext } from 'react';
import ProductContext from '../../context/ProductContext';
import { CollectionWrapper, SaleContainer } from './styles';

export default function CollectionGallery () {

    const { collections } = useContext(ProductContext);

    //TODO Change this handle - sala
    const featuredCollections = collections.filter(value => value.handle !== 'sala');
    const saleCollection = collections.filter(value => value.handle === 'sala');

    return (
        <CollectionWrapper>
            { saleCollection.map(({ title, shopifyId, image, handle}) => 
                <SaleContainer>
                    <Link to={`/collections/${handle}`}>
                        <img src={image.originalSrc} alt={title} key={shopifyId}/>
                        <h5>{title}</h5>
                    </Link>
                </SaleContainer>
            )}
            { featuredCollections.map(({title, shopifyId, image, handle}) => (
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