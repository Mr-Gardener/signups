import './App.css';
import {BrowserRouter, Navigate, link, Route, Routes} from 'react-router-dom';


//pages import
// import Navbar from './navbar.js';
import Home from './Home.js';
import { useState } from 'react';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar darkmode={mode} toggleMode={toggleMode} /> */}
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
