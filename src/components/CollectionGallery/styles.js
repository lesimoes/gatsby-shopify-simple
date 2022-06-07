import styled from 'styled-components';

export const CollectionWrapper = styled.section`

    display: flex;
    justify-content: space-around;

    img {
        width: 320px;
        height: 220px;
        object-fit: cover;
    }

    img:hover {
        cursor: pointer;
    }
`