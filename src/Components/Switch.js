import React from "react";
import styledComponents from "styled-components";

export const Switch = ( {setTheme} ) => {

  return (
    <SwitchStyled className="switch">
      <fieldset>
      <input type="radio" className="button" name="colorSelector" onClick={ () => setTheme('dark') }></input>
      <input type="radio" className="button" name="colorSelector" onClick={ () => setTheme('light') }></input>
      <input type="radio" className="button" name="colorSelector" onClick={ () => setTheme('purple') }></input>
      </fieldset>
    </SwitchStyled>
  );
};

const SwitchStyled = styledComponents.div`


  position: relative;
  width: 105px;
  height: 34px;
  border-radius: 25px;
  background-color: var(--ToggleBkg);
  display:flex;
  align-items:center;
  justify-content: space-between;

  fieldset{
    border:none;
    display:flex;
  }

  .button{
    margin: 0 5px;
    cursor:pointer;
    width: 25px;
    height: 25px;
  }
  

`;