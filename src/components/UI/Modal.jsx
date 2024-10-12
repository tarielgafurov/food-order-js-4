import React, { useContext } from "react";
import styled from "styled-components";
import Button from "./Button";
import { createPortal } from "react-dom";
import { Store } from "../../store";
import { FoodContext } from "../../store/foodContext";

const Modal = (props) => {

  // const { product } = useContext(Store);
  const { items } = useContext(FoodContext)

  const amountTotalPrice = () => {
    let result = items.reduce((a, b) => {
      
      return a + (+b.amount * +b.priceFood)
    }, 0)

    return result
  }

  const countFood = () => {
    let res = items.reduce((a, b) => {
      console.log(b);
      console.log(a);
      
      return a + b.amount
    }, 0)

    return res
  }
  

  return (
    <>
      {createPortal(
        <ModalGlobalContainer  >
          <ContainerFoodInModal>
            {items.map((el) => {
              return (
                <>
                  <ModalContainer >
                    <h1>{el.titleFood}</h1>
                    <b>{el.priceFood}</b>
                    <div>
                    <Button onClick={countFood} backgroundColor="white" color="#FF9900" fontSize="25px"  >+</Button>
                    <span>{el.amount}</span>
                    <Button backgroundColor="white" color="#FF9900" fontSize="25px" >-</Button>
                    </div>
                  </ModalContainer>
                </>
              );
            })}
          </ContainerFoodInModal>
          <ContainerTotalAmount>
            <h1>Total Amount : {amountTotalPrice()}</h1>
            <hr />
            <div>
              <Button fontSize="22px" padding="9px 30px">
                Добавить
              </Button>
              <Button fontSize="22px" padding="9px 30px">
                Удалить
              </Button>
            </div>
          </ContainerTotalAmount>
        </ModalGlobalContainer>,
        document.getElementById("modal")
      )}
      {createPortal(
        <Backdrop onClick={props.onClose}></Backdrop>,
        document.getElementById("backdrop")
      )}
    </>
  );
};

export default Modal;

const ModalGlobalContainer = styled.div`
  width: 648px;
  height: 416px;
  border-radius: 30px;
  background-color: white;
  position: absolute;
  z-index: 4;
  left: 25%;
  top: 265px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`;

const ContainerFoodInModal = styled.div`
  overflow: scroll;
`;

const ModalContainer = styled.div`
  width: 570px;
  height: 64px;
  background-color: #ff9900;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 23px;
  margin-top: 12px;
  color: white;
  > h1 {
    font-size: 30px;
    font-weight: 700;
    line-height: 36.57px;
    width: 200px;
  }
  > b {
    font-size: 20px;
    font-weight: 600;
    line-height: 24.38px;
  }
  > span {
    font-family: Montserrat;
    font-size: 25px;
    font-weight: 400;
    line-height: 30.48px;
    text-align: center;
  }
  >div{
    width: 108px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > span {
    font-family: Montserrat;
    font-size: 25px;
    font-weight: 400;
    line-height: 30.48px;
    text-align: center;
  }
  }
`;

const ContainerTotalAmount = styled.div`
  width: 570px;
  height: 121px;
  padding: 0px 23px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  /* padding: 10px 0px; */
  > h1 {
    margin: 0;
    color: #FF9900;
    font-size: 35px;
  }
  > hr {
    width: 100%;
    background-color: #ff9900;
    border: 2px solid #ff9900;
  }
  > div {
    width: 454px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 26px;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 3;
`;
