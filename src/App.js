import React, { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Store from './components/pages/Store';
import Checkout from './components/pages/Checkout';

import { artwork } from './components/helperComponents/artwork'
import data from './components/data/artworks.json'


function App() {
  const err = new artwork ('','ERROR', "ERROR", "ERROR")
  const [selectedArtwork, setSelectedArtwork] = useState(err);

  let setArtwork = (artwork) => {
    console.log("Artwork chagned to: " + artwork)
    setSelectedArtwork(artwork)
  }

  const a = []
  const [list, setList] = useState(a);

  const addItem = (artwork) =>{
    if (list == []){
      list[0] = artwork
    }
    else{
      list.push(artwork)
    }
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home setArtwork = {setArtwork} />} />
          <Route path='/store' element={<Store setArtwork = {setArtwork} selectedArtwork = {selectedArtwork} addItem={addItem} err = {err}/>}   />
          <Route path='/checkout' element={<Checkout list={list} setList={setList} />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
