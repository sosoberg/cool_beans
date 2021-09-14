import React from 'react'
import { useQuery } from "@apollo/client";
import { PROTECTED_MENU } from "../../graphQL/api/querys";
import Product from "../../components/ProductCard"
import "./style.css"
export default function Order() {
    const { data, loading, error } = useQuery(PROTECTED_MENU);
    if(data){
        console.log(data)
    }
    if(error){
        console.log(error)
    }
    return (
        <>
        <p className="orderHeaderText">Select the drink you would like to order</p>
        <div id="orderContain">
            {data ? data.ProtectedMenu.map(item => <Product cardClass={"itemCard hover"} item={item}/>) : <></>}
            
        </div>
        </>
    )
}
