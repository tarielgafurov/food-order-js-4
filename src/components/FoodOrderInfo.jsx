import React from 'react'
import titleImage from "../assets/images/KYRGYZ-ASHKANASY.png"
import styled from 'styled-components';

const FoodOrderInfo = () => {
  return (
    <GlobalInformationContainer>
      <InformationContainer>
        <p><img src={titleImage} alt="" /> - оазис восточной культуры, где гости испытывают уникаьное путешествие через изумитетельные вкусы, аутентичную эстетику и безупречное гостеприимство.</p>
      </InformationContainer>
        <p>Самое большое разнообразие <span>Кыргызких блюд</span> приготовленных лучшими шеф-поварами!</p>
        <ContainerButtons>
            <button>Забронировать столик <span>→</span></button>
            <button>Меню <span>→</span></button>
        </ContainerButtons>
    </GlobalInformationContainer>
  )
}

export default FoodOrderInfo;


const GlobalInformationContainer = styled.div`
    margin: auto;
    width: 974px;
    margin-top: 151px;
    display: flex;
    flex-direction: column;
    align-items: center;
    > p{
        width: 453px;
        font-size: 18px;
        color: white;
        > span{
            color: #FF9900;
        }
    }
`

const InformationContainer = styled.div`
    width: 100%;
    height: 225px;
    
    > p{
        color: white;
        font-size: 35px;
    }
`

const ContainerButtons = styled.div`
    /* border: 2px solid red; */
    width: 470px;
    height: 41px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
    > button:nth-child(1){
        padding: 9px 23px 10px 37px;
        font-size: 18px;
        background-color: #FF9900;
        border-radius: 60px 0px 0px 60px;
        border: none;
        color: white;
        font-weight: 600;
        > span{
            font-size: 25px;
        }
    }
    > button:nth-child(2){
        background: none;
        /* width: ; */
        padding: 9px 20px 10px 18px;
        font-size: 18px;
        font-weight: 600;
        border-radius: 0px 60px 60px 0px;
        border: 1px solid #FF9900;
        color: white;
        > span{
            font-size: 23px;
        }
    }

`