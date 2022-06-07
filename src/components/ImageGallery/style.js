import styled from 'styled-components'

export const ImageGalleryWrapper = styled.section`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    img {
        width: 320px;
        height: 220px;
        object-fit: cover;
    }

    img:hover {
        cursor: pointer;
    }
`