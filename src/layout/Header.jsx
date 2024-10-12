import React, { useContext } from "react";
import styled from "styled-components";
import titleImage from "../assets/images/KYRGYZ-ASHKANASY.png";
import OrderBasketItem from "../components/OrderBasketItem";
import HeaderGlobalImage from "../assets/images/HeaderGlobalImage.png";
import FoodOrderInfo from "../components/FoodOrderInfo";
import { FoodContext } from "../store/foodContext";

const Header = (props) => {

  const { items } = useContext(FoodContext)

  const CalculateAmount = () => {
    let resultAmount = items.reduce((a , b) => {
      return a + b.amount
    } , 0)


    return resultAmount
  }

  return (
    <GlobalHeaderContainer >
      <HeaderStyled>
        <img src={titleImage} alt="" />
        <Navigation>
          <a href="">Главная</a>
          <a href="">О нас</a>
          <a href="">Отзывы</a>
          <a href="">Контакты</a>
          <a href="">Заказать</a>
        </Navigation>
        <OrderBasketItem count={CalculateAmount()} open={props.modal} />
      </HeaderStyled>
      <FoodOrderInfo/>
    </GlobalHeaderContainer >
  );
};

export default Header;

const GlobalHeaderContainer = styled.div`
  width: 100%;
  height: 900px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${HeaderGlobalImage});
  box-sizing: border-box;
  padding-top: 45px;
`;

const HeaderStyled = styled.header`
  width: 1170px;
  height: 46px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
 
`;

const Navigation = styled.nav`
  width: 596px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > a {
    color: white;
    font-size: 18px;
    text-decoration: none;
  }
`;
