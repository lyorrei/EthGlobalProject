import styled from "styled-components";

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }

  label {
    font-size: 18px;
  }

  form input {
    margin: 10px 15px;
    padding: 10px;
  }
`;

export const Alert = styled.span`
  font-size: 14px;
  color: red;
  font-weight: bold;
  margin-bottom: 10px;
  margin-left: 15px;
`;
