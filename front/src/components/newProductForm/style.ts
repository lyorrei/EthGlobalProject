import styled from "styled-components";

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    grid-gap: 1rem;
  }

  label {
    font-size: 18px;
  }

  
`;

export const Alert = styled.span`
  font-size: 14px;
  color: red;
  font-weight: bold;
  margin-bottom: 10px;
  margin-left: 15px;
`;
