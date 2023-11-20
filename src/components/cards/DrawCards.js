import React from "react";
import CardItem from "./CardItem";
import { setImg } from "../helperComponents/artwork";

const DrawCards = (props) => {
  let { artworkList, setArtwork, drawPrice } = props;
  return artworkList.map((value, index) => {
    setImg(value.getSrc(), value.getName());
    return (
      <ul className="cards__items">
        <CardItem
          key={index}
          art={value}
          drawPrice={drawPrice}
          click={() => setArtwork(value)}
        />
      </ul>
    );
  });
};

export default DrawCards;
