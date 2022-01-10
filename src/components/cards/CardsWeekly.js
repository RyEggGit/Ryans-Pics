import React, { useEffect } from 'react';
import CardItem from "./CardItem.js";
import './Cards.css';
import { Link, useHistory } from 'react-router-dom'
import data from '../data/weekly.json'
import { artwork } from '../helperComponents/artwork';
import DrawCards from './DrawCards.js';


function Cards(props) {
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

    return (
        <div className='cards'>
            <h1>Check out this week's new realeses </h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className='cards__items'>
                        <Link to='/store' className='unlink'>
                            <DrawCards artworkList={artworkList} setArtwork={setArtwork} />
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards

