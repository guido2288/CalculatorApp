import React from 'react';
import styledComponents from 'styled-components';

export const BtnReset = (props) => {
  return (
    <BtnResetStyled className='btn-reset' 
      onClick={ props.handleClear }>
      Reset
    </BtnResetStyled>
  )
}

const BtnResetStyled = styledComponents.div`

  height: 80px;
  font-size: 1em;
  display: flex;
  flex: 1 1;
  background-color: var(--KeyBkg);
  margin: 8px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: white;
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 10px;
  border-bottom: 4px solid var(--KeyBkgShadow);

`;