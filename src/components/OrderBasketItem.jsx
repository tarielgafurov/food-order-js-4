import React from 'react'
import { FaBasketShopping } from "react-icons/fa6";
import styled from 'styled-components';

const OrderBasketItem = (props) => {
  return (
    <OrderBasketStyled onClick={props.open} >
      <BasketIcon />
        <b>{props.count || 0}</b>
    </OrderBasketStyled>
  )
}

export default OrderBasketItem;


const OrderBasketStyled = styled.div`
    width: 61px;
    height: 61px;
    border-radius: 50%;
    background-color: #FFFFFF80;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    > b{
        position: absolute;
        right: 11px;
        top: 1px;
        font-size: 20px;
        color: white;
    }
`

const BasketIcon = styled(FaBasketShopping)`
    width: 25px;
    height: 25px;
    color: #FF9900;
`
