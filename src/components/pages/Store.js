import React, { useState, useEffect } from 'react'
import AllCards from '../cards/AllCards'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Expand from '../cards/Expand'
import {artwork} from '../helperComponents/artwork.js'


const Store = (props) => {
    let {selectedArtwork, setArtwork,addItem, err} = props
    return (
        <>
            <Navbar />
            <AllCards setArtwork={setArtwork} />
            <Footer />
            <Expand selectedArtwork={selectedArtwork} setArtwork={setArtwork} addItem = { addItem} err= {err} />
            
        </>

    );
}

export default Store

