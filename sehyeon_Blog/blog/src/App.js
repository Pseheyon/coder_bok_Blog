// import React, { useState } from 'react';
// import rac  from './img/rac.png';
import 'App.css';
//import React from 'react';
// img

import HomePage from './components/pages/HomePage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/pages/navbar/Navigation';
import WritePost from './components/pages/writepost/WritePost';
import Showposting from './components/pages/showposting/Showposting';
import Login from './components/pages/navbar/Login';
import styled, {css} from 'styled-components';
import Signup from './components/pages/navbar/Signup';

function App() {

  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='post' element={<WritePost/>}/>
          <Route path='posting' element={<Showposting/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<Signup/>}/>
        </Routes >
      </Router>
    </div>
  );
}

export default App;
