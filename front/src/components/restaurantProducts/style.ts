import styled from 'styled-components'

export const ProductsContainer = styled.div`
    margin: auto;
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
`
export const ProductBx = styled.li`
    list-style: none;
    margin: auto;
    display: flex;
    flex-direction: row;
    margin: 5px;
    padding: 10px;
    border: 1px solid #ff9935;
    border-radius: 1rem;
    align-items: center;
    grid-gap: 2rem;
`
export const ProductImg = styled.div`
    width: 100px;
    display: flex;
    align-items: center;

    img {
        width: 100%;
        border-radius: 15px;
        margin: 10px;
    }
`

export const ProductInfos = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 20px;

    h1 {
        font-size: 20px;
        color: #4f4f4f;
    }

    h3 {
        font-size: 16px;
        color: #d9d9d9;
    }

    p {
        font-size: 16px;
        color: #3f833e;
        font-weight: bold;
    }
`
