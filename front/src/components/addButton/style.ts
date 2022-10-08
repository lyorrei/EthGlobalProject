import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 40px;
  right: 40px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Button = styled.div`
  border-radius: 15px;
  background-color: #ff9935;
  height: 60px;
  cursor: pointer;
  padding: 10px;

  img {
    height: 100%;
  }
`;
export const Text = styled.div`
  color: #ff9935;
  font-size: 16px;
  font-weight: bold;
  margin: 0px 10px;
`;
