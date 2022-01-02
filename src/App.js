import React from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Store from './components/pages/Store';



function App() {
  return (
    <>
      <Router>  
        <Routes>  
          <Route  path='/' element = {<Home/>} />
          <Route  path='/explore' element = {<Store/>} />
        </Routes>
      </Router>
    </>
    
  );
}

export default App;
