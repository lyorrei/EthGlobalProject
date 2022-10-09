import React from "react";
import {
  RequestContainer,
  RequestBx,
  RequestImg,
  RequestInfos,
  RequestTitle,
  RequestContent,
  RequestBtns,
  RequestTexts
} from "./style";
import { Button } from "../button";
import pizzaImg from "../../assets/pizza-pepperoni.png";
import wrong from "../../assets/wrong.png";
import right from "../../assets/right.png";

interface Props {}

const Request: React.FC<Props> = (props) => {
  return (
    <RequestContainer>
      <RequestBx>
        <RequestTitle>Garibaldi’s Pizzeria</RequestTitle>
        <RequestContent>
          <RequestImg>
            <img src={pizzaImg} alt="Pizza" />
          </RequestImg>
          <RequestInfos>
            <RequestTexts>
              <h1>Ac. 24 #38-47, Bogotá</h1>
              <p>$ 15.00</p>
            </RequestTexts>
            <RequestBtns>
              <Button>
                <img src={right}></img>
              </Button>
              <Button>
                <img src={wrong}></img>
              </Button>
            </RequestBtns>
          </RequestInfos>
        </RequestContent>
      </RequestBx>
    </RequestContainer>
  );
};

export default Request;
