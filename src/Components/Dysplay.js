import React from 'react';
import styledComponents from 'styled-components';


export const Display = ({ input }) => {
  return (
    <DisplayStyled className='input'>
      {input}
    </DisplayStyled>
  )
}


const DisplayStyled = styledComponents.div`

    width: 500px;
    height: 75px;
    border-radius: 10px;
    margin-bottom: 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-weight: bold;
    font-size: 30px;
    background-color: var(--ScreenBkg);
    color: var(--Text);
    padding: 11px;
    padding-right: 30px;
 

`;


