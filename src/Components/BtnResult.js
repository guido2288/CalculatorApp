import React from 'react';
import styledComponents from 'styled-components';


export const BtnResult = (props) => {
  return (
    <BtnResultStyled className='btn-result'
    onClick={ () => props.handleClick(props.children)}
    >
        =
    </BtnResultStyled>
  )
}

const BtnResultStyled = styledComponents.div`

    height: 80px;
    font-size: 1.6em;
    display: flex;
    flex: 1 1;
    background-color: var(--KeyResult) ;
    margin: 8px;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: var(--TextResult);
    cursor: pointer;
    text-transform: uppercase;
    border-radius: 10px;
    border-bottom: 4px solid var(--KeyResultShadow);


`;