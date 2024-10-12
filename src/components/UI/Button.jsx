import React from 'react'
import styled from 'styled-components';

const Button = ({onClick , ...props}) => {
  return (
    <Buttonstyled style={{...props}} onClick={onClick} >{props.children}</Buttonstyled>
  )
}

export default Button;

const Buttonstyled = styled.button`
    ${props => (props.padding ? props.padding : `5px 25px`)};
    font-weight: 600;
    background-color: ${props => (props.backgroundColor ? `#FFFFFF` : `#FF9900`)};
    border-radius:  ${props => (props.borderRadius ? `60px` : `9px`)};
    border: none;
    color: ${props => (props.color ?  `#FF9900` : `#FFFFFF`)};
`
