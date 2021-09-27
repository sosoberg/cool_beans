import React, { useEffect, useState } from "react";
import { useApolloClient } from "@apollo/client";
import { GET_CACHED_CART, CURRENT_USER } from "../../graphQL/api/querys";
import {REMOVE_FROM_CART } from "../../graphQL/api/mutations";
import { useQuery, useMutation } from "@apollo/client";
import "./style.css";
export default function Cart() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    canton: "",
    zip: "",
    card: "",
    exp: "",
    security: ""
  })
  const client = useApolloClient();
  const { loading, error, data } = useQuery(CURRENT_USER);
  const[removeItem, response] = useMutation(REMOVE_FROM_CART, {
      refetchQueries: [CURRENT_USER, "me"]
  })


const removeFromCart = (event) => {
    removeItem({
        variables: {_id: event.target.value}
    })

}
const handleInput = (event) => {
let name = event.target.name
let value = event.target.value
setForm({
  ...form, [name]:value
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
              <>Not Logged In</>
            )}
          </div>
        </div>
      </div>
      <div id="checkoutBox">
        <form >
          <h5>Billing</h5>
          
          <div className="largeInput">
            <p>First Name</p>
            <input onChange={handleInput} name="firstName" value={form.firstName}></input>
           
          </div>
          <div className="largeInput">
            <p>Last Name</p>
            <input onChange={handleInput} name="lastName" value={form.lastName}></input>

          </div>
          <div className="largeInput">
            <p>Address</p>
            <input onChange={handleInput} name="address" value={form.address}></input>

          </div>
          <div className="largeInput">
            <p>City</p>
            <input onChange={handleInput} name="city" value={form.city}></input>

          </div>
          <div id="smallInputContain">
          <div className="smallInput">
            <p>Canton</p>
            <select style={{marginLeft: "20px"}} onChange={handleInput} name="canton" value={form.canton}>
              <option value="Zürich">Zürich</option>
              <option value="Berne">Berne</option>
              <option value="Luzern">Luzern</option>
              <option value="Uri">Uri</option>
              <option value="Schwyz">Schwyz</option>
              <option value="Obwalden">Obwalden</option>
              <option value="Nidwalden">Nidwalden</option>
              <option value="Glarus">Glarus</option>
              <option value="Zug">Zug</option>
              <option value="Freiburg">Freiburg</option>
              <option value="Solothurn">Solothurn</option>
              <option value="Basel-Stadt">Basel-Stadt</option>
              <option value="Basel-Landschaft">Basel-Landschaft</option>
              <option value="Schaffhausen">Schaffhausen</option>
              <option value="Appenzell Ausserrhoden">Appenzell Ausserrhoden</option>
              <option value="	Appenzell Innerrhoden">	Appenzell Innerrhoden</option>
              <option value="St. Gallen">St. Gallen</option>
              <option value="Graubünden">Graubünden</option>
              <option value="	Aargau">	Aargau</option>
              <option value="Thurgau">Thurgau</option>
              <option value="Ticino">	Ticino</option>
              <option value="Vaud">Vaud</option>
              <option value="Valais">Valais</option>
              <option value="Neuchâtel">Neuchâtel</option>
              <option value="Genève">Genève</option>
              <option value="Jura">Jura</option>
              <option value="Confédération suisse">Confédération suisse</option>
            </select>

          </div>
          <div className="smallInput">
            <p>Zip</p>
            <input onChange={handleInput} name="zip" value={form.zip}></input>

          </div>
          </div>
          <h5>Card</h5>
          <div className="largeInput">
            <p>Card Number</p>
            <input onChange={handleInput} name="card" value={form.card}></input>

          </div>
          <div id="smallInputContain">
          <div className="smallInput">
            <p>Expires</p>
            <input onChange={handleInput} name="exp" value={form.exp}></input>

          </div>
          <div className="smallInput">
            <p>Security Code</p>
            <input onChange={handleInput} name="security" value={form.security}></input>

          </div>
          </div>
          <div style={{display: "flex", justifyContent: "center"}}>
            <button id="placeOrderButton">Submit Order</button>

          </div>

          
        </form>
      </div>
    </div>
  );
}
