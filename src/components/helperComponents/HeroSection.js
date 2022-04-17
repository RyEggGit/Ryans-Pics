import React from 'react';
import '../../App.css';
import { Button } from './Button'
import './HeroSection.css';
import {Link} from 'react-router-dom'

function HeroSection() {


    return (
        <div className='hero-container'>
            <img src='/images/img-home.jpg' className='image' />
            <h1>Welcome</h1>
            <p>The Larget E-Store of Google Images That Aren't For Sale</p>
            <div className='hero-btns'>
                <Link className = 'btn-mobile' to='/store'>
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                        Explore
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default HeroSection;
