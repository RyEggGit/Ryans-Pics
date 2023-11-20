import React from "react";
import "../../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { Link } from "react-router-dom";
import { setImg } from "../helperComponents/artwork";

function HeroSection() {
  return (
    <div className="hero-container">
      <img
        src={setImg("img-home.JPG", "background")}
        className="image"
        id="background"
      />
      <h1>Welcome</h1>
      <p>A E-Store of Pictures taken by Ryan Eggens</p>
      <div className="hero-btns">
        <Link className="btn-mobile" to="/store">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Explore
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
