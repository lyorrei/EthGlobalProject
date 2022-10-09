import styled from "styled-components";

export const RequestContainer = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;
export const RequestBx = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  border: 0.4rem solid ${(props) => props.theme.colors.primary};
  width: 100%;
  border-radius: 1rem;
  display: flex;
  align-items: center;
`;

export const RequestTitle = styled.div`
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  border-radius: 1rem;
  font-size: 2.6rem;
  transform: translateY(-60%);
  width: fit-content;
`;

export const RequestContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const RequestImg = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  padding: 0rem 2.5rem 2.5rem 2.5rem;

  img {
    width: 100%;
    max-width: 11rem;
    border-radius: 1.5rem;
    margin: auto;
  }
`;

export const RequestInfos = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 2.5rem;
`
export const RequestTexts = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 26px;
    color: #4f4f4f;
  }

  p {
    font-size: 26px;
    color: black;
    font-weight: bold;
  }
`;

export const RequestBtns = styled.div`
    display: flex;
    flex-direction: row;
    align-items: space-between;
    justify-content: center;
    width: 20%;
    img{
        margin: 1.5rem
    }
`
