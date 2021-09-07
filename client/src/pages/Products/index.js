import React, {useEffect} from "react";
import {MENU} from "../../graphQL/api/querys"
import { useQuery } from '@apollo/client';
import "./style.css"



function Products() {
  const {data, loading, error} = useQuery(MENU)
  console.log(data)
  if(loading){
    return <p>Loading...</p>
  }
  if(error){
    return <p>Error...</p>
  }
  if(data){
   
    return (
      <div id="menuContain">
        {
          data.Menu.map(item => 
<div className="itemCard" style={{background:`url(${item.image})`, backgroundSize: "cover"}}>
  <h3>{item.title}</h3>
          <p>{item.ingredients}</p>
          <p>{item.allergens}</p>
          <p>{item.sizes}</p>
          <p>{item.prices}</p>

  
  </div>
          )
          
        }
        
          
      </div>
    );

  }
  
}

export default Products;