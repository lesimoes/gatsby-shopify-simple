import styled from 'styled-components';

export const ProductWrapper = styled.section`
    display: flex; 
    justify-content: space-around;
    

    img {
        width: 420px;
        height: 280px;
        object-fit: cover;
    }
    @media (min-width: 768px) {
        flex-direction: column;
    }
`;