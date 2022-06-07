import React from 'react';
import CollectionMenu from '../CollectionMenu/CollectionMenu';
import { HeaderWrapper } from './styles';

export default function Header () {

    return (
        <HeaderWrapper>
            <div>
                <input placeholder='Buscar'/>
            </div>
            <CollectionMenu />
        </HeaderWrapper>
        
    )
}