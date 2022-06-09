import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import {Btn} from './Components/Btn';
import { BtnReset } from './Components/BtnReset';
import { BtnResult } from './Components/BtnResult';
import { Display } from './Components/Dysplay';
import { Switch } from './Components/Switch';
import { evaluate } from 'mathjs';
import { BtnDel } from './Components/BtnDel';


function App() {

  const [theme , setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.className = theme
  }, [theme]);

  const [input , setInput] = useState('');

  const addInput = (e) => {
    setInput(input + e);
  };

  const setResult = () => {
    if (input) {
      setInput(evaluate(input));
    }
   
  };

  const delInput = () => {
    
      if(isNaN(input) ) {
        setInput(input.slice(0, -1))
      } else {
        setInput(input.toString().slice(0, -1))
      }

  }

  return (
    <AppStyled className='App'>
      
      <header className='header'>
        <h1>calc</h1>

        <div className='switchContainer'>
          <p>THEME</p>
          <Switch setTheme={setTheme}/>
        </div>
      </header>

      <Display input={input} />
      <main className='main-container'>
      <div className='row'>
        <Btn handleClick={addInput}>7</Btn>
        <Btn handleClick={addInput}>8</Btn>
        <Btn handleClick={addInput}>9</Btn>
        <BtnDel handleClick={delInput}>Del</BtnDel>
        
      </div>
      <div className='row'>
        <Btn handleClick={addInput}>4</Btn>
        <Btn handleClick={addInput}>5</Btn>
        <Btn handleClick={addInput}>6</Btn>
        <Btn handleClick={addInput}>+</Btn>
      </div>
      <div className='row'>
        <Btn handleClick={addInput}>1</Btn>
        <Btn handleClick={addInput}>2</Btn>
        <Btn handleClick={addInput}>3</Btn>
        <Btn handleClick={addInput}>-</Btn>
      </div>
      <div className='row'>
        <Btn handleClick={addInput}>.</Btn>
        <Btn handleClick={addInput}>0</Btn>
        <Btn handleClick={addInput}>/</Btn>
        <Btn handleClick={addInput}>*</Btn>
      </div>
      <div className='row'>
        <BtnReset handleClear={ () => setInput('') }/>
        <BtnResult handleClick={ setResult }/>
      </div>

      </main>

    </AppStyled>
  );
}

const AppStyled = styled.div`
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--Text);
    width:500px;
    font-size: 18px;
    padding: 20px 0
  }
  

  .switchContainer{
    display:flex;
    align-items: center;
  }
  .switchContainer p{
    font-size: 1rem
  }
  .main-container{
    width: 500px;
    height: 500px;
    padding: 20px;
    border-radius:15px;
    background-color: var(--ToggleBkg);
  }

  .row{
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn-result:hover , .btn-del:hover , .btn-reset:hover{
  filter: brightness(1.5);
}

@media (max-width: 550px) {
  .header{
      width: 300px;
  
  }

  .main-container{
    width: 300px;
    height: 440px;
    padding: 10px;
  }

  .input{
    width: 300px;
  }

  .row{
    margin: 10px;

}

}


`;

export default App;
