import React, { useEffect } from 'react';
import Button from '../Button';
import CardItem from "./CardItem";
import './Cards.css';
import '../pages/Store'

import data from '../data/artworks.json'
import { artwork } from '../helperComponents/artwork';
import DrawCards from './DrawCards';

const Cards = (props) => {
    let { setArtwork } = props
    var artworkList = []
    var result = []
    for (var i in data) {
        result.push([i, data[i]]);
        var art = new artwork(data[i].src, data[i].name, data[i].artist, data[i].price)
        if (artworkList.length == 0) {
            artworkList[0] = art
        }
        else {
            artworkList.push(art)
        }
    }
    let { setImage } = props
    return (
        < div className='cards' >
            <h1>Artsy Fartsy <i className="fas fa-wind"></i></h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <DrawCards artworkList={artworkList} setArtwork={setArtwork} />
                </div>
            </div>
        </div >


    )
}

export default Cards