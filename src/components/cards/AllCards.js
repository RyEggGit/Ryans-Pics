import React from 'react';
import './Cards.css';
import '../pages/Store'
import { artwork } from '../helperComponents/artwork';
import DrawCards from './DrawCards';

const Cards = (props) => {
    let { setArtwork, artworkList } = props  
    console.log(artworkList)
    return (
        < div className='cards' >
            <h1>Store</h1>
            <div className="cards__container">
                <DrawCards artworkList={artworkList.slice(0,3)} setArtwork={setArtwork} drawPrice = {true}/>
            </div>
            <div className="cards__container">
                <DrawCards artworkList={artworkList.slice(3,5)} setArtwork={setArtwork} drawPrice = {true}/>
            </div>
            <div className="cards__container">
                <DrawCards artworkList={artworkList.slice(5,8)} setArtwork={setArtwork}drawPrice = {true} />
            </div>
            
        </div >


    )
}

export default Cards