import React, {useContext} from 'react'
import styled from "styled-components";
import Button from '../UI/Button';
import { FoodContext } from '../../store/foodContext';

const Meals = (props) => {
    
    const {id , amount , titleFood , priceFood , description , imageFood} = props.items

    const { addBasket } = useContext(FoodContext)

    const addFoodhandler = () => {
        const newBasket = {
            id,
            titleFood,
            priceFood,
            amount
        }
        addBasket(newBasket)
    }

  return (
    <>
      <GlobalContaonerFood key={id} >
            <FoodImage src={imageFood} alt="" />
            <ContainerFood>
              <b>{titleFood}</b>
              <p>{description}</p>
              <ContainerCount>
                <span className="plus" >+</span>
                <span>|</span>
                <span>{amount}</span>
                <span>|</span>
                <span className="minus" >-</span>
              </ContainerCount>
              <Button onClick={addFoodhandler} fontSize="12px" padding="5px 14px">{priceFood}</Button>
            </ContainerFood>
          </GlobalContaonerFood>
    </>
  )
}

export default Meals;



const FoodImage = styled.img`
  /* border: 2px solid red; */
  position: absolute;
  height: 138.32px;
  width: 193px;
  top: -115px;
  left: 20px;
`;

const GlobalContaonerFood = styled.div`
  width: 241px;
  /* height: 320px; */
  margin-top: 100px;
  position: relative;
`;

const ContainerFood = styled.div`
  width: 241px;
  height: 267px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  background-color: #63636394;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.94px;
  text-align: center;
  border-radius: 20px;
  >p{
    font-size: 12px;
    font-weight: 400;
  }
`;

const ContainerCount = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  gap: 23px;
  .plus{
    padding: 10px;
    font-size: 35px;
  }
  .minus{
    font-size: 40px;
    padding: 10px;
  }
  .plus:hover{
    cursor: pointer;
    background-color: #FF9900;
    color: white;
    border-radius: 10px;
  }
  .minus:hover{
    cursor: pointer;
    background-color: #FF9900;
    color: white;
    border-radius: 10px;
  }
`

