import '../../App.css';
import HeroSection from '../HeroSection.js';
import React from 'react';
import Cards from '../CardsWeekly.js';
import Navbar from '../Navbar.js';
import Footer from '../Footer.js';

function Home(){
    return (
        <>
            <Navbar/>
            <HeroSection/>
            <Cards/>
            <Footer/>   
        </>
    );
}

export default Home;