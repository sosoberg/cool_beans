import React, { useState } from "react";
import "./style.css";

import ReactCardFlip from "react-card-flip";
export default function Product(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = () => {
    setIsFlipped(true);
  };
  const handleFlipBack = () => {
    setIsFlipped(false);
  };
  return (
    <ReactCardFlip
      containerStyle={{ width: "45%" }}
      isFlipped={isFlipped}
      flipDirection="vertical"
    >
      <div
        key={props.item.id}
        className={props.cardClass}
        style={{
          background: `url(${props.item.image})`,
          backgroundSize: "cover",
        }}
      >
        <div className="productTextContainer">
          <h1>{props.item.title}</h1>
          <hr></hr>
          <table className="priceSizeTable">
            <tbody>
              <tr>
                {props.item.sizes.map((size) => (
                  <th className="th">{size}</th>
                ))}
              </tr>
              <tr>
                {props.item.prices.map((price) => (
                  <th>{price}</th>
                ))}
              </tr>
            </tbody>
          </table>
          <hr></hr>
          <h3>Contains</h3>
          <br></br>
          <p>{props.item.ingredients}</p>
          <hr></hr>
          <h3>Alergens</h3>
          <br></br>
          <p>{props.item.allergens}</p>
        </div>
        {window.location.pathname === "/order" ? (
          <button className="orderButton" onClick={handleFlip}>Order</button>
        ) : (
          <></>
        )}
      </div>
      
        <form className="orderCard">
          <h2>{props.item.title}</h2>
          <select>
          {props.item.sizes.map((size, index) => (
            <option key={index}value={size}>{size}</option>
                  
                ))}
          </select>
      
          <button onClick={handleFlipBack}>Add To Cart</button>
        </form>
        
      
    </ReactCardFlip>
  );
}
