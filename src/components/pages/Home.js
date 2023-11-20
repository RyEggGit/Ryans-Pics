import "../../App.css";
import HeroSection from "../helperComponents/HeroSection.js";
import React from "react";
import Cards from "../cards/CardsWeekly.js";
import Navbar from "../helperComponents/Navbar.js";
import Footer from "../helperComponents/Footer.js";

function Home(props) {
  let { setArtwork, artworkList } = props;

  return (
    <>
      <Navbar />
      <HeroSection />
      <Cards setArtwork={setArtwork} artworkList={artworkList} />
      <Footer />
    </>
  );
}

export default Home;
