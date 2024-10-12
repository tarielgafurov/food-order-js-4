import React, { useContext } from "react";
import MainGlobalImage from "../../assets/images/MainGlobalImage.png";
import styled from "styled-components";
import Button from "../UI/Button";
import { Store } from "../../store";
import Meals from "../Meals/Meals";

const Products = ({ items }) => {

  const context = useContext(Store)
  
  return (
    <GlobalProductContainer>
      <ParentContainer>
      {context.product.map((el) => {
        return (
          <Meals items={el} key={el.id} />
        );
      })}
      </ParentContainer>
    </GlobalProductContainer>
  );
};

export default Products;

const GlobalProductContainer = styled.div`
  width: 100%;
  height: 1232px;
  background-image: url(${MainGlobalImage});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ParentContainer = styled.div`
  width: 80%;
  height: 900px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
`
