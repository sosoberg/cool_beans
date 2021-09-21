import React, { useState, useRef } from "react";
import "./style.css";
import { ADD_TO_CART } from "../../graphQL/api/mutations";
import { GET_CACHED_CART } from "../../graphQL/api/querys";
import ReactCardFlip from "react-card-flip";
import { useMutation } from "@apollo/client";
import { useApolloClient } from "@apollo/client";
export default function Product(props) {
  const client = useApolloClient();
  const [AddToCart, { data, loading, error }] = useMutation(ADD_TO_CART);

  const [isFlipped, setIsFlipped] = useState(false);
  const [size, setSize] = useState(props.item.sizes[0]);
  const [price, setPrice] = useState(props.item.prices[0]);
  const [extra, setExtra] = useState(null);
  const [message, setMessage] = useState(null);
  const [dairyFree, setDairyFree] = useState(null);

  const ingreSelect = useRef(null);
  const dairySelect = useRef(null);

  const handleFlip = () => {
    setIsFlipped(true);
  };
  const handleFlipBack = () => {
    setIsFlipped(false);
  };
  const handlePrice = (event) => {
    if (dairyFree || extra) {
      setExtra(null);
      setDairyFree(null);
      dairySelect.current.selected = true;
      let index = props.item.sizes.indexOf(event.target.value);
      setPrice(props.item.prices[index]);
      setMessage("Please readd custome items");
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    } else {
      let index = props.item.sizes.indexOf(event.target.value);
      setPrice(props.item.prices[index]);
      setSize(event.target.value);
    }
  };
  const handleExtra = (event) => {
    let addedCost;
    if (extra) {
      console.log(extra.indexOf(event.target.value));
      if (extra.indexOf(event.target.value) !== -1) {
        setMessage("Item Already Added");
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      } else {
        setExtra([...extra, event.target.value]);
        addedCost = parseFloat(price.substring(1)) + 0.5;
        setPrice("₣" + addedCost.toFixed(2));
      }
    } else {
      addedCost = parseFloat(price.substring(1)) + 0.5;
      setExtra([event.target.value]);

      setPrice("₣" + addedCost.toFixed(2));
    }
    ingreSelect.current.selected = true;
  };
  const removeItem = (event) => {
    let addedCost;
    console.log(event.target.value);
    setExtra(extra.filter((item, index) => index != event.target.value));
    addedCost = parseFloat(price.substring(1)) - 0.5;
    setPrice("₣" + addedCost.toFixed(2));
  };
  const milkFree = (event) => {
    let addedCost;
    setDairyFree(event.target.value);
    addedCost = parseFloat(price.substring(1)) + 1.5;
    setPrice("₣" + addedCost.toFixed(2));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    AddToCart({
      variables: {
        item: {
          title: props.item.title,
          size: size,
          price: price,
          extra: extra,
          dairy: dairyFree,
        },
      },
    });
  };
  if (data) {
    client.writeQuery({
      query: GET_CACHED_CART,
      data: {
        // Contains the data to write
        cart: {
          __typename: "Cart",
          list: [data.addToCart],
        },
      },
    });
  }

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
          <button className="orderButton" onClick={handleFlip}>
            Order
          </button>
        ) : (
          <></>
        )}
      </div>

      <form onSubmit={handleSubmit} className="orderCard">
        <h2>{props.item.title}</h2>
        <div className="drinkFlex">
          <p>Select Size</p>
          <select onChange={handlePrice}>
            {props.item.sizes.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <div className="drinkFlex">
          <p>Price</p>
          <p>{price}</p>
        </div>
        <div className="drinkFlex">
          <div style={{ display: "flex" }}>
            <p>Add ingredients</p>
            <p style={{ fontSize: "15px", marginLeft: "5px" }}>*.50 each</p>
          </div>
          <select onChange={handleExtra}>
            {/* list of ingrediaents options*/}
            <option ref={ingreSelect} value="" disabled selected hidden>
              Add ingredients
            </option>
            <option value={"Chockolate Syrup"}>Chockolate Syrup</option>
            <option value={"Carmel Syrup"}>Carmel Syrup</option>
            <option value={"Hazelnut Syrup"}>Hazelnut Syrup</option>
            <option value={"Cynimon"}>Cynimon</option>
          </select>
          {message ? <p className="allReadyAdded">{message}</p> : <></>}
        </div>
        <div className="drinkFlex">
          <div style={{ display: "flex" }}>
            <p>lactose intolerant?</p>
            <p style={{ fontSize: "15px", marginLeft: "5px" }}> + 1.50</p>
          </div>

          <select onChange={milkFree}>
            {/* list of ingrediaents options*/}
            <option ref={dairySelect} value="" disabled selected hidden>
              Choose a replacement
            </option>
            <option value={"Oat Milk"}>Oat Milk</option>
            <option value={"Almond Milk"}>Almond Milk</option>
          </select>
        </div>
        <div className="addedIngContain">
          <ul>
            {extra ? (
              extra.map((item, index) => (
                <li>
                  {item}
                  <button type="button" onClick={removeItem} value={index}>
                    x
                  </button>
                </li>
              ))
            ) : (
              <></>
            )}
          </ul>
        </div>
        <button className="addToCartButton" onClick={handleFlipBack}>
          Add To Cart
        </button>
      </form>
    </ReactCardFlip>
  );
}
