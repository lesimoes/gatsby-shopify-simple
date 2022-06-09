import styled from 'styled-components';

export const CollectionWrapper = styled.section`

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
    img {
        width: 380px;
        height: 220px;
        object-fit: cover;
        opacity: 1;
        border: 1px solid gray
    }

    img:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        opacity: 0.6;
        border: 1px solid gray
    }

    div {
        position: relative;
    }

    h5 {
        position: absolute;
        top: calc(50% - 40px);
        left: calc(50% - 40px);
        font-size: 32px;
        font-weight: bold;
        color: white;
    }
    
`

export const SaleContainer = styled.div`
    width: 100%;
    display: block;
    position: relative;

    img {
        width: 100%;   
    }

    h5 {
        font-size: 52px;
        color: black;
    }

`