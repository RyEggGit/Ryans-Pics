import React from 'react';
import CardItem from "./CardItem";
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these the New Realeses this week</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className='cards__items'>
                    <CardItem
                            src='images/img-1.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            price='$150'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-1.jpg'
                            text='Travel through the Islands of Bali in a Private Cruise'
                            price='$150'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-1.jpg'
                            text='Travel through the Islands of Bali in a Private Cruise'
                            price='$150'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards

