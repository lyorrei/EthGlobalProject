import styled from 'styled-components'

export const ProductsContainer = styled.div`
    width: 500px;
    margin: auto;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    border: 1px solid #FF9935;

`
export const ProductBx = styled.div`
    margin: auto;
    display: flex;
    flex-direction: row;
    margin: 5px;
    padding: 10px;

`
export const ProductImg = styled.div`
    width: 100px;
    display: flex;
    align-items: center;

    img{
        width: 100%;
        border-radius: 15px;
        margin: 10px;
    }
`

export const ProductInfos = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 20px;

    h1{
        font-size: 20px;
        color: #4f4f4f;
    }
    
    h3{
        font-size: 16px;
        color: #d9d9d9;
    }
    
    
    p{
        font-size: 16px;
        color: #3F833E;
        font-weight: bold   ;
    }

`   