import React, { useEffect } from "react";
import { artwork } from "../helperComponents/artwork";
const Buy = (props) => {
  let { list, setTotal } = props;
  var tot = 0;

  useEffect(() => {
    setTotal(tot);
  });

  return list.map((value, index) => {
    tot += parseInt(value.getPriceInt());
    return (
      <div key={index} className="splitcheckout">
        <p className="name">{value.getName()}</p>
        <p className="price">{value.getPriceString()}</p>
      </div>
    );
  });
};

export default Buy;
