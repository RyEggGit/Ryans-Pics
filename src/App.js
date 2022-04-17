import React, { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Store from './components/pages/Store';
import Checkout from './components/pages/Checkout';

import { artwork } from './components/helperComponents/artwork'
import data from './components/data/weekly_artworks.json'
import { firestore } from './components/firebase/config'

function App() {
  const err = new artwork('', 'ERROR', "ERROR", "ERROR")
  const [selectedArtwork, setSelectedArtwork] = useState(err);

  let setArtwork = (artwork) => {
    console.log("Artwork chagned to: " + artwork)
    setSelectedArtwork(artwork)
  }

  const a = []
  const [list, setList] = useState(a);

  const addItem = (artwork) => {
    if (!list.includes(artwork)) {
      list.push(artwork)

    }

  }
  var artworkList = []
  for (let i =0; i < 3; i ++) {
    var art = new artwork(data[i].src, data[i].name, data[i].artist, data[i].price)
    artworkList.push(art)
  }



  async function getData(fireDoc) {
    const doc = await firestore.collection('Art').doc(fireDoc).get()
    if (!doc.exists) {
      console.log('No such document!');
    } else {
      console.log(doc.data())
      artworkList.push(new artwork(doc.data().src, doc.data().name, doc.data().artist, doc.data().price))
    }
  }
  for (let i = 3; i < 8; i++) {
    getData(i + "")
  }







  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home setArtwork={setArtwork} artworkList={artworkList.slice(0, 3)} />} />
          <Route path='/store' element={<Store setArtwork={setArtwork} selectedArtwork={selectedArtwork} addItem={addItem} err={err} artworkList={artworkList} />} />
          <Route path='/checkout' element={<Checkout list={list} setList={setList} />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
