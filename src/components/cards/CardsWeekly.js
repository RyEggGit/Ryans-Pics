import React from 'react';
import './Cards.css';
import { Link } from 'react-router-dom'
import { artwork } from '../helperComponents/artwork';
import DrawCards from './DrawCards.js';


function Cards(props) {
    let { setArtwork, artworkList } = props

    return (
        <div className='cards'>
            <h1>Check out this week's new realeses </h1>
            <div className="cards__container">
                <Link to='/store' className='unlink'>
                    <DrawCards artworkList={artworkList} setArtwork={setArtwork} drawPrice={false} />
                </Link>
            </div>
        </div>
    );
}

export default Cards

