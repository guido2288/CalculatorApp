import React from 'react'
import styledComponents from 'styled-components';


export const Btn = (props) => {

  return (
    <BtnStyled
      className='btn-container' 
      onClick={ () => props.handleClick(props.children)}>
      {props.children}
    </BtnStyled>
  )
}

const BtnStyled = styledComponents.div`
  height: 55px;
  display: flex;
  flex: 1 1;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 38px;
  background-color:  var(--KeyNumber); 
  color: var(--TextNumber);
  border-radius: 10px;
  border-bottom: 4px solid var(--KeyNumberShadow);
  margin: 4px;
  padding-top: 4px;
  cursor: pointer;
  user-select: none;

`;