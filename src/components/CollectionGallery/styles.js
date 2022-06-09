import styled from 'styled-components';

export const CollectionWrapper = styled.section`

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex: 0 0 33.333333%;
    
    img {
        width: 100%;
        height: 220px;
        object-fit: cover;
        opacity: 1;
        border: 1px solid gray;
        padding: 0 0;
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
        flex-grow: 3;
    }

    h5 {
        position: absolute;
        top: calc(50% - 40px);
        left: calc(50% - 40px);
        font-size: 32px;
        font-weight: bold;
        color: white;
    }

    @media (max-width: 780px) {
        flex-direction: column;
        img {
            width: 100%;
        }
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