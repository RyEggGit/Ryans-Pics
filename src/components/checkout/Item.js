import React from "react";
import Button from "../helperComponents/Button";
import "./Item.css";
import { Link } from "react-router-dom";
import { setImg } from "../helperComponents/artwork";

const Item = (props) => {
  let { list, removeIndex, empty } = props;
  const ItemsInBag = () => {
    return list.map((value, index) => {
      return (
        <div key={index} className="item">
          <img
            src={setImg(value.getSrc(), value.getName())}
            id={value.getName()}
          />
          <div className="description">
            <p>{value.getName()}</p>
            <p>Artist: {value.getArtist()}</p>
            <p>Price: {value.getPriceString()}</p>
          </div>
          <div className="remove-button">
            <Button buttonStyle={"btn--blue"} click={() => removeIndex(value)}>
              Remove
            </Button>
          </div>
        </div>
      );
    });
  };
  const NoItemsInBag = () => {
    return (
      <div className="empty">
        <h1>Looks like your bag is Empty</h1>
        <div className="to-store">
          <Link to="/store">
            <Button buttonStyle={"btn--outline-grey"}>Back to Store</Button>
          </Link>
        </div>
      </div>
    );
  };

  if (empty) {
    return <NoItemsInBag />;
  }
  return <ItemsInBag />;
};

export default Item;
