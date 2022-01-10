import '../../App.css';
import HeroSection from '../HeroSection.js';
import React, {useState} from 'react';
import Cards from '../cards/CardsWeekly.js';
import Navbar from '../Navbar.js';
import Footer from '../Footer.js';
import Expand from '../cards/Expand'

function Home(props){
    let {setArtwork} = props;
    return (
        <>
            <Navbar/>
            <HeroSection />
            <Cards setArtwork={setArtwork} />
            <Footer/>   
        </>
    );
}

export default Home;