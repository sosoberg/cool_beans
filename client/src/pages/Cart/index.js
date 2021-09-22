import React, { useEffect } from "react";
import { useApolloClient } from "@apollo/client";
import { GET_CACHED_CART, CURRENT_USER } from "../../graphQL/api/querys";
import {REMOVE_FROM_CART } from "../../graphQL/api/mutations";
import { useQuery, useMutation } from "@apollo/client";
import "./style.css";
export default function Cart() {
  const client = useApolloClient();
  const { loading, error, data } = useQuery(CURRENT_USER);
  const[removeItem, response] = useMutation(REMOVE_FROM_CART, {
      refetchQueries: [CURRENT_USER, "me"]
  })

  if (data) {
    console.log(data);
  }
  
const removeFromCart = (event) => {
    removeItem({
        variables: {_id: event.target.value}
    })

}
  return (
    <div id="cartContain">
      <div id="itemContainer">
        <div className="itemCardContain">
          <div className="checkoutCard">
            <h1>Cart</h1>
            {data ? (
              data.me.cart.map((item) => (
                <div className="individualItem">
                  
                    <h5 style={{fontWeight: "bolder", fontSize: "20px", padding: "10px", textAlign: "center"}} >{item.title}</h5>
                  
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" , flexWrap: "wrap"}}
                  >
                    <div className="centerText">
                      <h6>Size</h6>
                      <p>{item.size}</p>
                    </div>
                    <div className="centerText">
                      <h6>Dairy Alt</h6>
                      <p>{item.dairy || "None"}</p>
                    </div>
                    <div className="centerText">
                      <h6>Drink Price</h6>
                      <p>{item.price}</p>
                    </div>
                    <div className="centerText">
                        <h6 >Add</h6>
                      {item.extra ? (
                        item.extra.map((ing) => <p>{ing}</p>)
                      ) : (
                        <p>None</p>
                      )}
                    </div>
                    <button value={item._id} onClick={removeFromCart} className="removeButton">x</button>
                  </div>
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <div id="checkoutBox">
        <div>
          <h1>Checkout</h1>
        </div>
      </div>
    </div>
  );
}
