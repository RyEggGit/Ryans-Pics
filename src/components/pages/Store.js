import React from 'react'
import AllCards from '../cards/AllCards'
import Navbar from '../helperComponents/Navbar'
import Footer from '../helperComponents/Footer'
import Expand from '../cards/Expand'


const Store = (props) => {
    let {selectedArtwork, setArtwork,addItem, err, artworkList} = props
    return (
        <>
            <Navbar />
            <AllCards setArtwork={setArtwork} artworkList = {artworkList}/>
            <Footer />
            <Expand selectedArtwork={selectedArtwork} setArtwork={setArtwork} addItem = { addItem} err= {err} />
            
        </>

    );
}

export default Store

