import React, {useEffect} from 'react'
import { useApolloClient } from "@apollo/client";
import {GET_CACHED_CART} from "../../graphQL/api/querys"
import {useQuery} from "@apollo/client"
import "./style.css"
export default function Cart() {
    const client = useApolloClient()

    const {data, error, loading} = useQuery(GET_CACHED_CART)
if(data){
    console.log(data)
}
  
    return (
        <div id="cartContain">
            <div id="itemContainer">
            <div className="itemCardContain">
                    <div className="checkoutCard">
                        <h1>Cart</h1>
                {data ? data.cart.list[0].map(item => 
                <div>
                    <p>{item.title}</p>
                    <p>{item.size}</p>
                    <p>{item.dairy}</p>
                <p>{item.price}</p>
                {item.extra ? item.extra.map(ing => <p>{ing}</p>) : <></>}
                  
                </div>
                

                   
                ) : <></>}
                </div>
                </div>
            </div>
            <div id="checkoutBox">
                <div>
                    <h1>Checkout</h1>
                    
                </div>
            </div>
            
        </div>
    )
}
