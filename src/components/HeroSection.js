import React from 'react';
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';

function HeroSection() {


    return (
        <div className='hero-container'>
            <img src = '/images/img-home.jpg'/>
            <h1>Welcome</h1>
            <p>Are you ready to explore the local Canadian artwork from the comfort of your home?</p>
            <div className='hero-btns'>
                <Button className = 'btns' buttonStyle = 'btn--outline' buttonSize = 'btn--large'> 
                    Explore 
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;
