import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateAccount from "./component/create/create"
import Forgotten from './component/forgot/forgot';
import LogIn from './component/login/log';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>  
          <Route path="/" exact element ={<LogIn/>}/>
            <Route path="/forgotten"exact element ={<Forgotten/>}/>
          <Route path="/createaccount" exact element ={<CreateAccount/>}/> 
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
