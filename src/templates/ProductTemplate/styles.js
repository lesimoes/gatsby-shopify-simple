import styled from 'styled-components';

export const ProductWrapper = styled.section`
    display: flex; 
    justify-content: space-around;

    @media (min-width: 768px) {
        flex-direction: column;
    }
`;